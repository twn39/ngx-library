import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[border]'
})
export class BorderDirective {

  @Input()
  border!: string;

  @Input()
  borderRadius!: string;

  @HostBinding('style.border')
  get _border() {
    return this.border;
  }

  @HostBinding('style.border-radius')
  get _borderRadius() {
    return this.borderRadius;
  }

}
