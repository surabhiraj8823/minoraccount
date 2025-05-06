import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  standalone: true,
  selector: 'app-document-selector',
  templateUrl: './document-selector.component.html',
  styleUrls: ['./document-selector.component.css'],
  imports: [FormsModule, CommonModule] 
})
export class DocumentSelectorComponent {
  documentTypes: string[] = ['DL', 'Passport', 'Voter', 'Aadhar'];
  selectedDocument?: string;
}