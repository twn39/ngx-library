import {Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input} from '@angular/core';
// @ts-ignore
import kjua from 'kjua';

@Component({
  selector: 'ngx-simple-qrcode',
  template: `
    <div class="ngx-simple-qrcode" #qrcode></div>
  `,
  styleUrls: ['./ngx-simple-qrcode.scss']
})
export class NgxSimpleQrcodeComponent implements OnInit, AfterViewInit {

  @Input()
  render = "image";

  @Input()
  crisp = true;

  @Input()
  minVersion = 1;

  @Input()
  ecLevel = 'L';

  @Input()
  size = 200;

  @Input()
  fill = '#333';

  @Input()
  back = '#fff';

  @Input()
  text = '';

  @Input()
  rounded = 0;

  @Input()
  quiet = 0;

  @Input()
  mode = 'plain';

  @Input()
  mSize = 30;

  @Input()
  mPosX = 50;

  @Input()
  mPosY = 50;

  @Input()
  label = '';

  @Input()
  fontname = 'sans';

  @Input()
  fontcolor = '#262626';

  @Input()
  image: any = null;

  @ViewChild("qrcode")
  private qrcodeNode!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const el = kjua({
      render: this.render,
      crisp: this.crisp,
      minVersion: this.minVersion,
      ecLevel: this.ecLevel,
      size: this.size,
      fill: this.fill,
      back: this.back,
      text: this.text,
      rounded: this.rounded,
      quiet: this.quiet,
      mode: this.mode,
      mSize: this.mSize,
      mPosX: this.mPosX,
      mPosY: this.mPosY,
      label: this.label,
      fontname: this.fontname,
      fontcolor: this.fontcolor,
      image: this.image,
    });
    this.qrcodeNode.nativeElement.appendChild(el);
  }

}
