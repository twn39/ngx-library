import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[flex]'
})
export class FlexDirective {

  @Input()
  flex!: number | string;

  @Input()
  alignItems!: string;

  @Input()
  display = 'flex';

  @Input()
  alignContent!: string;

  @Input()
  flexDirection!: string;

  @Input()
  justifyContent!: string;

  @Input()
  flexWrap!: string;

  @Input()
  flexGrow!: string;

  @HostBinding('style.flex')
  get _flex() {
    return this.flex;
  }

  @HostBinding('style.display')
  get _display() {
    return this.display;
  }

  @HostBinding('style.align-items')
  get _alignItems() {
    return this.alignItems;
  }

  @HostBinding('style.align-content')
  get _alignContent() {
    return this.alignContent;
  }

  @HostBinding('style.flex-direction')
  get _flexDirection() {
    return this.flexDirection;
  }

  @HostBinding('style.justify-content')
  get _justifyContent() {
    return this.justifyContent;
  }

  @HostBinding('style.flex-wrap')
  get _flexWrap() {
    return this.flexWrap;
  }

  @HostBinding('style.flex-grow')
  get _flexGrow() {
    return this.flexGrow;
  }
}
