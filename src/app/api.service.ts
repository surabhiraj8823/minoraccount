import { Injectable } from '@angular/core'; 

import { HttpClient } from '@angular/common/http'; 

import { Observable } from 'rxjs'; 

 

@Injectable({ 

  providedIn: 'root' 

}) 

export class ApiService { 

 

  constructor(private http: HttpClient) {} 



  // Fetch cities from a local JSON file 

  getCities(): Observable<any> { 

    return this.http.get<any>('assets/cities.json'); 

  } 
}