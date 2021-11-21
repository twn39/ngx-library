import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxF2ChartComponent } from './ngx-f2-chart.component';

describe('NgxF2ChartComponent', () => {
  let component: NgxF2ChartComponent;
  let fixture: ComponentFixture<NgxF2ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxF2ChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxF2ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
