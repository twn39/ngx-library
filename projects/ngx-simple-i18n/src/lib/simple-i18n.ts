import {BehaviorSubject, Observable} from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core';
import {pluck} from 'rxjs/operators';

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

  constructor(id: string, source: CallBack, storage = null, ttl = 0) {
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

  setLanguage(id: string, callback: CallBack, storage = null, ttl = 0) {
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


@Pipe({
  name: 'T',
  pure: false,
})
export class I18nTranslatePipe implements PipeTransform {

  constructor(private simpleI18n: SimpleI18n) {}

  transform(value: string, ...args: unknown[]): Observable<string> {
    return this.simpleI18n.translation$.pipe(pluck(value));
  }
}

