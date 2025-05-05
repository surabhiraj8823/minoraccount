import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this

import { AppComponent } from './app.component';
import { HomeTypeComponent } from './home-type/home-type.component';

@NgModule({
  declarations: [AppComponent, HomeTypeComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
