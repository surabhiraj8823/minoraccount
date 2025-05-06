import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentSelectorComponent } from "./document-selector/document-selector.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DocumentSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minor';
}
