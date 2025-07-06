import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBreakerComponent } from './scale-breaker.component';

describe('ScaleBreakerComponent', () => {
  let component: ScaleBreakerComponent;
  let fixture: ComponentFixture<ScaleBreakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleBreakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaleBreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
