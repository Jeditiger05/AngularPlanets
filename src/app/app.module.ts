import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsCreateComponent } from './planets-create/planets-create.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetsCreateComponent,
    PlanetsDetailComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
