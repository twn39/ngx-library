import { createPopper, Placement } from '@popperjs/core';
import {Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {PopperContainerComponent} from "./components/popper-container/popper-container.component";

@Directive({
  selector: '[popperFor]'
})
export class NgxSimplePopperDirective implements OnInit, OnDestroy, OnChanges {

  @Input()
  popperFor!: PopperContainerComponent;

  @Input()
  placement!: Placement;

  @Input()
  offset = [0, 6];

  popper: any = null;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  _dispose() {
    this.popper.destroy();
    this.popper = null;
  }

  createPopper() {
    if (this.popper) {
      this._dispose();
    }
    this.popper = createPopper(this.el.nativeElement, this.popperFor.elementRef.nativeElement, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: this.offset,
          },
        },
      ],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const currValue = changes?.['placement'].currentValue;
    const prevValue = changes?.['placement'].previousValue;
    if (currValue !== prevValue) {
      this.createPopper();
    }
  }

  ngOnDestroy() {
    this._dispose();
  }

}
