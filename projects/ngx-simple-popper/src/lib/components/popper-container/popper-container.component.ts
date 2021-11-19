import {Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'popper-container',
  templateUrl: './popper-container.component.html',
  styleUrls: ['./popper-container.component.css'],
})
export class PopperContainerComponent implements OnInit {

  @Input()
  @HostBinding('attr.data-state')
  public state: 'show' | 'hide' = 'show';

  public elementRef: ElementRef;

  constructor(el: ElementRef) {
    this.elementRef = el;
  }

  ngOnInit(): void {
  }
}
