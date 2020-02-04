import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  //planet: Planet;
  name: string = "";
  moons: number;
  distanceFromSun: number;
  constructor(private store: PlanetStoreService) { }

  ngOnInit() {
  }

  createPlanet() {
    //this.planet = new Planet(this.name, this.moons, this.distanceFromSun);//Create Planet Object Using constructor
    //this.planet = { name: this.name, moons: this.moons, distanceFromSun: this.distanceFromSun }//Create Planet Object without Using Constructor
    //this.store.addPlanet(planet);

    if (this.name != "") {
      this.store.addPlanet({ name: this.name, moons: this.moons, distanceFromSun: this.distanceFromSun });
      this.store.log();
      this.name = "";
      this.moons = null;
      this.distanceFromSun = null;
      this.store.showDetails = false
      this.store.showCreate = true;
      this.store.showList = false;
      this.store.showError = false;
    }
    else {
      this.store.log();
      this.name = "";
      this.moons = null;
      this.distanceFromSun = null;
      this.store.selectedPlanet = null;
      this.store.showDetails = false;
      this.store.showCreate = true;
      this.store.showList = false;
      this.store.showError = false;
    }

  }

}
