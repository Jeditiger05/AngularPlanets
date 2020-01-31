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

    this.dispPlanets = this.store.planetsList();
    console.log("Display");
    if (this.dispPlanets.length > 0) {
      this.store.showList = true;
      this.store.showError = false;
      this.store.showCreate = false;
    }
    else
      this.store.showError = true;
  }
}
