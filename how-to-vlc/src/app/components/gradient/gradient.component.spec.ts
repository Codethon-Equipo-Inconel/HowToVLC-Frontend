import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientComponent } from './gradient.component';

describe('GradientComponent', () => {
  let component: GradientComponent;
  let fixture: ComponentFixture<GradientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradientComponent]
    });
    fixture = TestBed.createComponent(GradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
