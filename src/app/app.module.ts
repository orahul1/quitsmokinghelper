import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule,MdRadioModule,MdSelectModule,MdDatepickerModule,MdNativeDateModule,MdSlideToggleModule,MdSnackBarModule,MdProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSlideToggleModule,
    MdSnackBarModule, 
    FormsModule, 
    ReactiveFormsModule,
    MdProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
