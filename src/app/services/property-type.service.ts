import { Injectable } from '@angular/core';
import { PropertyType } from '../models/property-type.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyTypeService {
  getPropertyTypes(): PropertyType[] {
    return [
      { id: 1, name: 'Bunglow' },
      { id: 2, name: 'Apartment' },
      { id: 3, name: 'Flat' }
    ];
  }
}