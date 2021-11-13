import {BehaviorSubject, Observable, Subscribable, Subscription} from 'rxjs';
import {ChangeDetectorRef, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {map} from 'rxjs/operators';

export type LangItemData = {
  [key: string]: string
}

export type CallBack = () => Promise<any>

export class LangItem {
  public id: string;
  public storage: any;
  public ttl: number;
  public data?: LangItemData;
  public source: CallBack

  constructor(id: string, source: CallBack, storage: Storage|null, ttl = 0) {
    this.id = id;
    this.source = source;
    this.storage = storage;
    this.ttl = ttl;
  }
}

export class SimpleI18n {
  private readonly data: {[key: string]: LangItem}
  private prefix = 'i18n';
  public translation$ = new BehaviorSubject<LangItemData>({});

  constructor() {
    this.data = {};
  }

  setPrefix(prefix: string) {
    this.prefix = prefix;
  }

  setLanguage(id: string, callback: CallBack, storage: Storage | null = null, ttl = 0) {
    this.data[id] = new LangItem(id, callback, storage, ttl);
  }

  private getDataFromStorage(id: string) {
    const language = this.data[id];
    let data = language.storage.getItem(`${this.prefix}.${id}`);
    if (!data) {
      return null;
    }
    data = JSON.parse(data);
    const now = new Date().getTime();
    if ((now - data.time) <= language.ttl) {
      return data.data;
    }
    return null;
  }

  private setDataToStorage(id: string) {
    const language = this.data[id];
    language.storage.setItem(`${this.prefix}.${id}`, JSON.stringify({
      data: language.data,
      time: new Date().getTime(),
    }));
  }

  private async getDataFromSource(id: string): Promise<any> {
    const language = this.data[id];
    return await language.source();
  }

  async switchLanguage(id: string): Promise<void> {
    const item = this.data[id];
    if (!item.data) {
      // get data from storage
      if (item.storage) {
        item.data = this.getDataFromStorage(id);
      }
    }
    if (!item.data) {
      // get data from source
      item.data = await this.getDataFromSource(id);
      if (item.storage) {
        // set storage
        this.setDataToStorage(id);
      }
    }
    if (item.data) {
      this.translation$.next(item.data);
    }
  }
}

export const simpleI18nProvider = {
  provide: SimpleI18n,
  useClass: SimpleI18n,
}


@Pipe({name: 'T', pure: false})
export class I18nTranslatePipe implements OnDestroy, PipeTransform {

  private _latestValue: any = '';
  private _subscription: Subscription | null = null;
  private _i18n$: Observable<any> | null = null;
  private _currentValue: string | null  = null;

  constructor(
    private simpleI18n: SimpleI18n,
    private _cdRef: ChangeDetectorRef,
  ) {}

  transform(value: string, ...args: unknown[]): string {
    if (!this._i18n$) {
      this._currentValue = value;
      this._i18n$ = this.simpleI18n.translation$;
      this._subscription = this._i18n$.pipe(map(x => x?.[value])).subscribe(it => {
        this._latestValue = it;
        this._cdRef.markForCheck();
      });
      return this._latestValue;
    }
    /**
    When the reference of the expression changes, the input value
    will change, so unsubscribes from the old `Observable` and subscribes to the new one.
    */
    if (this._currentValue !== value) {
      this._dispose();
      return this.transform(value);
    }

    return this._latestValue;
  }

  private _dispose(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this._latestValue = '';
    this._i18n$ = null;
    this._subscription = null;
  }

  ngOnDestroy() {
    this._dispose();
  }
}

