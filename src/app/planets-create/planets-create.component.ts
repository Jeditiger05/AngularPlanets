import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  //planet: Planet;
  name: string;
  moons: number;
  distanceFromSun: number;
  constructor(private store: PlanetStoreService) { }

  ngOnInit() {
  }

  createPlanet() {
    //let planet1 = new Planet(this.name, this.moons, this.distanceFromSun);//Create Planet Object Using constructor
    //let planet: Planet = { name: this.name, moons: this.moons, distanceFromSun: this.distanceFromSun }//Create Planet Object without Using Constructor
    if (this.name.length > 0) {
      //this.store.addPlanet(planet2);
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
