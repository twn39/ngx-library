import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'popper-container',
  templateUrl: './popper-container.component.html',
  styleUrls: ['./popper-container.component.css']
})
export class PopperContainerComponent implements OnInit {

  @Input()
  public show = true;

  public elementRef: ElementRef;

  constructor(el: ElementRef) {
    this.elementRef = el;
  }

  ngOnInit(): void {
  }
}
