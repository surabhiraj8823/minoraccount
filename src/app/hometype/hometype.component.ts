import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometype',
  templateUrl: './hometype.component.html',
  styleUrls: ['./hometype.component.css']
})
export class HomeTypeComponent implements OnInit {
  homeTypes: string[] = ['Villa', 'Apartment', 'Bunglow'];
  selectedType: string = '';
  submitted: boolean = false;

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
  }
}