import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component'; // Import standalone component

@NgModule({
  declarations: [
    AppComponent // Only declare non-standalone components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CityListComponent // Import standalone component directly here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }