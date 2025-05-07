import { Component, OnInit } from '@angular/core';
import { Fetching1Service } from '../services/fetching1.service';
import { Country } from '../models/country';
import { Event } from '@angular/router';

@Component({
  selector: 'app-template',
  standalone: false,
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  countries: Country[] = [];
  states: { name: string; cities: string[] }[] = [];
  cities: string[] = [];

  selectedCountry: string | null = null;
  selectedState: string | null = null;
  selectedCity: string | null = null;

  constructor(private fetching1Service: Fetching1Service) {}

  ngOnInit(): void {
    this.fetching1Service.getCountries().subscribe(data => {
      this.countries = data.Countries;
    });
  }

  onCountryChange(): void {
    const country = this.countries.find(c => c.name === this.selectedCountry);
    this.states = country ? country.states : [];
    this.cities = []; 
    this.selectedState = null; 
    this.selectedCity = null; 
  }
  
  onStateChange(): void {
    const state = this.states.find(s => s.name === this.selectedState);
    this.cities = state ? state.cities : [];
    this.selectedCity = null; 
  }
}