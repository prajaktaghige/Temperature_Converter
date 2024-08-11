import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TemperatureConverter } from './temperature-converter/temperature-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
