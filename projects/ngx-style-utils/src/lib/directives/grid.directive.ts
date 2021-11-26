import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[grid]'
})
export class GridDirective {

  @Input()
  display = 'grid';

  @Input()
  gap!: string;

  @Input()
  gridTemplateColumns!: string;

  @Input()
  gridTemplateRows!: string;

  @Input()
  gridTemplateAreas!: string;

  @HostBinding('style.gap')
  get _gap() {
    return this.gap;
  }

  @HostBinding('style.grid-template-columns')
  get _gridTemplateColumns() {
    return this.gridTemplateColumns;
  }

  @HostBinding('style.display')
  get _display() {
    return this.display;
  }

  @HostBinding('style.grid-template-rows')
  get _gridTemplateRows() {
    return this.gridTemplateRows;
  }

  @HostBinding('style.grid-template-areas')
  get _gridTemplateAreas() {
    return this.gridTemplateAreas;
  }
}

@Directive({
  selector: '[grid-item]'
})
export class GridItemDirective {

  @Input()
  gridColumn!: string;

  @Input()
  gridRow!: string;

  @Input()
  gridArea!: string;

  @Input()
  gridColumnStart!: string;

  @Input()
  gridColumnEnd!: string;

  @Input()
  gridRowStart!: string;

  @Input()
  gridRowEnd!: string;

  @HostBinding('style.grid-column')
  get _gridColumn() {
    return this.gridColumn;
  }

  @HostBinding('style.grid-row')
  get _gridRow() {
    return this.gridRow;
  }

  @HostBinding('style.grid-area')
  get _gridArea() {
    return this.gridArea;
  }

  @HostBinding('style.grid-column-start')
  get _gridColumnStart() {
    return this.gridColumnStart;
  }

  @HostBinding('style.grid-column-end')
  get _gridColumnEnd() {
    return this.gridColumnEnd;
  }

  @HostBinding('style.grid-row-start')
  get _gridRowStart() {
    return this.gridRowStart;
  }

  @HostBinding('style.grid-row-end')
  get _gridRowEnd() {
    return this.gridRowEnd;
  }
}
