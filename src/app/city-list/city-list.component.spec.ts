import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CityListComponent } from './city-list.component';
import { ApiService } from '../api.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('CityListComponent', () => {
  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  const mockCities = {
    cities: [
      { id: 1, name: 'Mumbai' },
      { id: 2, name: 'Delhi' },
      { id: 3, name: 'Chennai' }
    ]
  };

  beforeEach(waitForAsync(() => {
    const apiSpy = jasmine.createSpyObj('ApiService', ['getCities']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CityListComponent], // ✅ FIXED: import the standalone component
      providers: [{ provide: ApiService, useValue: apiSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(CityListComponent);
    component = fixture.componentInstance;
    mockApiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  }));

  it('should fetch cities from the API and display them in the dropdown', () => {
    mockApiService.getCities.and.returnValue(of(mockCities));
    fixture.detectChanges(); // ngOnInit()

    const options = fixture.debugElement.queryAll(By.css('option'));
    expect(options.length).toBe(3);
    expect(options[0].nativeElement.textContent).toContain('Mumbai');
    expect(options[1].nativeElement.textContent).toContain('Delhi');
    expect(options[2].nativeElement.textContent).toContain('Chennai');
  });

  it('should log an error if API call fails', () => {
    const consoleSpy = spyOn(console, 'error');
    mockApiService.getCities.and.returnValue(throwError(() => new Error('API failed')));
    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalledWith('Error fetching cities:', jasmine.any(Error));
  });
});
