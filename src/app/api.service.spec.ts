import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch cities from local JSON file', () => {
    const mockResponse = {
      cities: [
        { id: 1, name: 'Mumbai' },
        { id: 2, name: 'Delhi' }
      ]
    };

    service.getCities().subscribe(data => {
      expect(data.cities.length).toBe(2);
      expect(data.cities[0].name).toBe('Mumbai');
    });

    const req = httpMock.expectOne('assets/cities.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle error if cities.json fails to load', () => {
    service.getCities().subscribe({
      next: () => fail('Expected error'),
      error: (err) => expect(err.status).toBe(404)
    });

    const req = httpMock.expectOne('assets/cities.json');
    req.flush('Not found', { status: 404, statusText: 'Not Found' });
  });
});
