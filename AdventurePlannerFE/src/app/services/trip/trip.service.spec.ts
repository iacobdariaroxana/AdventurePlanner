import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TripService } from './trip.service';
import { AppConfigService } from '../app-config/app-config.service';
import { TripDto } from 'src/app/dtos/trip-dto';

describe('TripService', () => {
  let service: TripService;
  let httpMock: HttpTestingController;
  let appConfigService: AppConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TripService, AppConfigService]
    });

    service = TestBed.inject(TripService);
    httpMock = TestBed.inject(HttpTestingController);
    appConfigService = TestBed.inject(AppConfigService);

    appConfigService.Configuration = { apiUrl: 'https://api.example.com/', googleApiUrl: '' };
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch list of trips and map them using updateBasedOnDto', () => {
    const mockTripDtos: TripDto[] = [
      Object.assign(new TripDto(), {
        id: '1',
        name: 'Trip 1',
        startDate: '2023-01-01',
        endDate: '2023-01-10',
        numberOfPersons: 4,
        estimatedBudget: 1000
      }),
      Object.assign(new TripDto(), {
        id: '2',
        name: 'Trip 2',
        startDate: '2023-02-01',
        endDate: '2023-02-15',
        numberOfPersons: 2,
        estimatedBudget: 500
      })
    ];

    service.getTrips().subscribe((trips) => {
      expect(trips.length).toBe(2);

      expect(trips[0].id).toBe('1');
      expect(trips[0].name).toBe('Trip 1');
      expect(trips[0].startDate).toEqual(new Date('2023-01-01'));
      expect(trips[0].endDate).toEqual(new Date('2023-01-10'));
      expect(trips[0].numberOfPersons).toBe(4);
      expect(trips[0].estimatedBudget).toBe(1000);

      expect(trips[1].id).toBe('2');
      expect(trips[1].name).toBe('Trip 2');
      expect(trips[1].startDate).toEqual(new Date('2023-02-01'));
      expect(trips[1].endDate).toEqual(new Date('2023-02-15'));
      expect(trips[1].numberOfPersons).toBe(2);
      expect(trips[1].estimatedBudget).toBe(500);
    });

    const req = httpMock.expectOne('https://api.example.com/Trip');
    expect(req.request.method).toBe('GET');
    req.flush(mockTripDtos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
