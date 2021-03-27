import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CricketComponent } from './components/cricket/cricket.component';
import { ScienceComponent } from './components/science/science.component';
import { GeneralComponent } from './components/general/general.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { KollywoodComponent } from './components/kollywood/kollywood.component';
import { HeaderComponent } from './layout/header/header.component';
import { CovidComponent } from './components/covid/covid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CricketComponent,
    ScienceComponent,
    GeneralComponent,
    TechnologyComponent,
    PoliticsComponent,
    KollywoodComponent,
    HeaderComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
