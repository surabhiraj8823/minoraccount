import { Component } from '@angular/core';
import { HomeTypeComponent } from './hometype/hometype.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeTypeComponent],
  template: `<app-home-type></app-home-type>`,
})
export class AppComponent {
  title = 'hometypeproject'; 
}
