import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmInfoComponent } from './gm-info.component';

describe('GmInfoComponent', () => {
  let component: GmInfoComponent;
  let fixture: ComponentFixture<GmInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
