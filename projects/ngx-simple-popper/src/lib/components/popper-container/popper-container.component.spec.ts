import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopperContainerComponent } from './popper-container.component';

describe('PopperContainerComponent', () => {
  let component: PopperContainerComponent;
  let fixture: ComponentFixture<PopperContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopperContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
