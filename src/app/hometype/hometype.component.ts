import { Component } from '@angular/core';

@Component({
  selector: 'app-hometype',
  templateUrl: './hometype.component.html',
  styleUrls: ['./hometype.component.css']
})
export class HometypeComponent {
  propertyTypes = [
    { id: 1, name: 'Bunglow' },
    { id: 2, name: 'Apartment' },
    { id: 3, name: 'Flat' }
  ];
  selectedType = this.propertyTypes[0].name;

  submit() {
    alert('Selected Home Type: ' + this.selectedType);
  }
}
