import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Fetching1Service } from './fetching1.service';

describe('Fetching1Service', () => {
  let service: Fetching1Service;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Fetching1Service]
    });

    service = TestBed.inject(Fetching1Service);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should fetch countries', () => {
    const mockResponse = {
      Countries: [
        { name: 'India', states: [] },
        { name: 'USA', states: [] }
      ]
    };

    service.getCountries().subscribe(data => {
      expect(data.Countries.length).toBe(2);
      expect(data.Countries[0].name).toBe('India');
    });

    const req = httpMock.expectOne('assets/countries.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });
});