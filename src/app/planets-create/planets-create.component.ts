import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  planet1: Planet;
/*   name: string;
  moons: number;
  distanceFromSun: number; */

  constructor(private store: PlanetStoreService) { }

  ngOnInit() {
  }

  createPlanet() {
   // let planet1 = new Planet(this.name, this.moons, this.distanceFromSun);//Create Planet Object Using constructor
   // let planet2: Planet = { name: this.name, moons: this.moons, distanceFromSun: this.distanceFromSun }//Create Planet Object without Using Constructor

    this.store.addPlanet(this.planet1);
    //this.store.addPlanet(planet2);
    this.store.log();

  }

}
