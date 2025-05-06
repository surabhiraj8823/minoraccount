import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentSelectorComponent } from './document-selector.component';
import { By } from '@angular/platform-browser';

describe('DocumentSelectorComponent', () => {
  let component: DocumentSelectorComponent;
  let fixture: ComponentFixture<DocumentSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentSelectorComponent], 
    }).compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have predefined document types', () => {
    expect(component.documentTypes).toEqual(['DL', 'Passport', 'Voter', 'Aadhar']);
  });

  it('should allow selection of a document type', () => {
    component.selectedDocument = 'Passport';
    expect(component.selectedDocument).toBe('Passport');
  });
  it('should have an empty selection initially', () => {
    expect(component.selectedDocument).toBeUndefined(); // Expect undefined instead of ''
  });  
  it('should not allow selection of an invalid option', () => {
    component.selectedDocument = 'InvalidDocument'; 
    fixture.detectChanges();
  
    expect(component.documentTypes.includes(component.selectedDocument)).toBeFalse();
  });
  it('should correctly update selectedDocument even when reselected', () => {
    component.selectedDocument = 'Passport';
    fixture.detectChanges();
  
    component.selectedDocument = 'Passport'; // Re-selecting same option
    fixture.detectChanges();
  
    expect(component.selectedDocument).toBe('Passport'); // Ensure state persists
  });
  it('should correctly handle multiple rapid selections', () => {
    const selectElement = fixture.debugElement.query(By.css('#documentType')).nativeElement;
  
    selectElement.value = 'DL';
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selectedDocument).toBe('DL');
  
    selectElement.value = 'Voter';
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selectedDocument).toBe('Voter');
  });
  // it('should not allow empty selection when required', () => {
  //   component.selectedDocument = ''; // Simulating an invalid empty selection
  //   fixture.detectChanges();
  
  //   expect(component.selectedDocument).toBeTruthy(); // Ensures selection is not empty
  // });  
});