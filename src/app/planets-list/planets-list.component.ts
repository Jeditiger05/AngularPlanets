import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})

export class PlanetsListComponent implements OnInit {

  public dispPlanets: Planet[];
  

  constructor(private store: PlanetStoreService) { }

  ngOnInit() {
  }

  displayPlanets() {

    this.store.sortPlanets();
    this.dispPlanets = this.store.getPlanets();

    console.log("Display");
    if (this.dispPlanets.length > 0) {
      this.store.showDetails = true;
      this.store.showList = true;
      this.store.showError = false;
      this.store.showCreate = false;
    }
    else
      this.store.showError = true;
  }

  onSelect(planet: Planet){
    this.store.selectedPlanet = planet;
    console.log(this.store.selectedPlanet)
  }
}
