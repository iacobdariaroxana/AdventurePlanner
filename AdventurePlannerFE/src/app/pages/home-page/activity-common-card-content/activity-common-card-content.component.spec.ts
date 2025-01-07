import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCommonCardContentComponent } from './activity-common-card-content.component';

describe('ActivityCommonCardContentComponent', () => {
  let component: ActivityCommonCardContentComponent;
  let fixture: ComponentFixture<ActivityCommonCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityCommonCardContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityCommonCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
