import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleQrcodeComponent } from './ngx-simple-qrcode.component';

describe('NgxSimpleQrcodeComponent', () => {
  let component: NgxSimpleQrcodeComponent;
  let fixture: ComponentFixture<NgxSimpleQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSimpleQrcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
