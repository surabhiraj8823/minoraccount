import { Component, OnInit } from '@angular/core'; 

import { ApiService } from '../api.service'; 

import { CommonModule } from '@angular/common'; 

 

@Component({ 

  selector: 'app-city-list', 

  standalone: true, // Marking this component as standalone 

  imports: [CommonModule],  

  templateUrl: './city-list.component.html', 

  styleUrls: ['./city-list.component.css'] 

}) 

export class CityListComponent implements OnInit { 

  cities: { id: number; name: string }[] = []; // Array to store cities 

 

  constructor(private apiService: ApiService) {} 

 

  ngOnInit(): void { 

    this.apiService.getCities().subscribe( 

      (data) => { 

        this.cities = data.cities; // Assign the cities array from the JSON 

        console.log('Fetched cities:', this.cities); // Debugging log 

      }, 

      (error) => { 

        console.error('Error fetching cities:', error); // Debugging log 

      } 

    ); 

  } 

} 