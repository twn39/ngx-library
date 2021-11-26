import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[box]'
})
export class BoxDirective {

  @Input()
  padding: number | string = 0;

  @Input()
  margin: number | string = 0

  @Input()
  display = 'block';

  @Input()
  background!: string;

  @Input()
  color!: string;

  @Input()
  boxShadow!: string;

  @HostBinding('style.padding')
  get _padding() {
    return this.padding;
  }

  @HostBinding('style.margin')
  get _margin() {
    return this.margin;
  }

  @HostBinding('style.display')
  get _display() {
    return this.display;
  }

  @HostBinding('style.background')
  get _background() {
    return this.background;
  }

  @HostBinding('style.color')
  get _color() {
    return this.color;
  }

  @HostBinding('style.box-shadow')
  get _boxShadow() {
    return this.boxShadow;
  }
}
