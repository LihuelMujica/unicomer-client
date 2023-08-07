import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeCardComponent } from './outcome-card.component';

describe('OutcomeCardComponent', () => {
  let component: OutcomeCardComponent;
  let fixture: ComponentFixture<OutcomeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutcomeCardComponent]
    });
    fixture = TestBed.createComponent(OutcomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
