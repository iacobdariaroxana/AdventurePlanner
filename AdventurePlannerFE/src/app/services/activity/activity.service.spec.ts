import { TestBed } from '@angular/core/testing';

import { ActivityService } from './activity.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActivityService', () => {
  let service: ActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule] });
    service = TestBed.inject(ActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
