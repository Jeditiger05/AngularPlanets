import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanetsCreateComponent } from './planets-create/planets-create.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsCreateComponent,
    PlanetDetailComponent,
    PlanetsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
