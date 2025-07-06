import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigandierComponent } from './brigandier.component';

describe('BrigandierComponent', () => {
  let component: BrigandierComponent;
  let fixture: ComponentFixture<BrigandierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrigandierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrigandierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
