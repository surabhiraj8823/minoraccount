import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template.component';
import { Fetching1Service } from '../services/fetching1.service';
import { of } from 'rxjs';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [TemplateComponent],
      providers: [Fetching1Service]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch countries on init', () => {
    const service = TestBed.inject(Fetching1Service);
    const mockResponse = {
      Countries: [
        { name: 'India', states: [] },
        { name: 'USA', states: [] }
      ]
    };

    spyOn(service, 'getCountries').and.returnValue(of(mockResponse));

    component.ngOnInit();
    expect(component.countries.length).toBe(2);
    expect(component.countries[0].name).toBe('India');
  });
});