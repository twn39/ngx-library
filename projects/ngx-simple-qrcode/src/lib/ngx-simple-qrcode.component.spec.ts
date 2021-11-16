import {ComponentFixture, ComponentFixtureAutoDetect, TestBed, tick} from '@angular/core/testing';
import { NgxSimpleQrcodeComponent } from './ngx-simple-qrcode.component';

describe('NgxSimpleQrcodeComponent', () => {
  let component: NgxSimpleQrcodeComponent;
  let fixture: ComponentFixture<NgxSimpleQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSimpleQrcodeComponent ],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.text = "hello world.";
    component.size = 200;
    expect(component).toBeTruthy();
  });

  it('should create qrcode image', () => {
    component.text = "hello world.";
    component.size = 200;
    const element = fixture.nativeElement;
    const img = element.querySelector('img');
    expect(img.src).toContain('data:image');
  });
});
