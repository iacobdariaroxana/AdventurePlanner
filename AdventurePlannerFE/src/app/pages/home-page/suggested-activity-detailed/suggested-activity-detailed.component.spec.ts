import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedActivityDetailedComponent } from './suggested-activity-detailed.component';

describe('SuggestedActivityDetailedComponent', () => {
  let component: SuggestedActivityDetailedComponent;
  let fixture: ComponentFixture<SuggestedActivityDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedActivityDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedActivityDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
