import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreRulesComponent } from './core-rules.component';

describe('CoreRulesComponent', () => {
  let component: CoreRulesComponent;
  let fixture: ComponentFixture<CoreRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
