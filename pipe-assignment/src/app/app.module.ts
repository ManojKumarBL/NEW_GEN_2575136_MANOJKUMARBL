import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReversePipe } from './reverse-string.pipe';
import { CountriesComponent } from './countries/countries.component';
import { SortPipe } from './sort-countries.pipe';
import { TemperatureConversionPipe } from './temperature-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    CountriesComponent,
    SortPipe,
    TemperatureConversionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
