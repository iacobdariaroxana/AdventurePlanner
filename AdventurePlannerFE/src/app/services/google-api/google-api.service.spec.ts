import { TestBed } from '@angular/core/testing';

import { GoogleApiService } from './google-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoogleApiServiceService', () => {
  let service: GoogleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(GoogleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
