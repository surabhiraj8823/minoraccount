import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-hometype',
  template: '<p>Mock HomeType Component</p>',
})
class MockHomeTypeComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockHomeTypeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the HomeType component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-hometype')).not.toBeNull();
  });

  
  it('should render mock content inside app-hometype', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Mock HomeType Component');
  });

  
  it('should contain only one child element (app-hometype)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const children = compiled.children;
    expect(children.length).toBe(1);
    expect(children[0].tagName.toLowerCase()).toBe('app-hometype');
  });

  
  it('should have non-empty inner HTML', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.innerHTML.trim().length).toBeGreaterThan(0);
  });

  it('should have no aria-hidden elements by default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const hiddenElements = compiled.querySelectorAll('[aria-hidden="true"]');
    expect(hiddenElements.length).toBe(0);
  });
});
