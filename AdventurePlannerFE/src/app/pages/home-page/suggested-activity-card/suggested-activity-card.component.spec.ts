import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedActivityCardComponent } from './suggested-activity-card.component';

describe('SuggestedActivityCardComponent', () => {
  let component: SuggestedActivityCardComponent;
  let fixture: ComponentFixture<SuggestedActivityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedActivityCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
