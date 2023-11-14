// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadonlyDirective } from './readonly.directive';
import { NoWhitespaceDirective } from './no-whitespace.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReadonlyDirective,
    NoWhitespaceDirective,
    NumbersOnlyDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }