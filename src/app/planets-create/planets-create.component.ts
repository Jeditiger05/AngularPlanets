import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  name: string;
  moons: number;
  distanceFromSun: number;

  constructor(private store: PlanetStoreService) { }

  ngOnInit() {
  }

  createPlanet(){
    let planet1 = new Planet(this.name, this.moons, this.distanceFromSun);
    this.store.addPlanet(planet1);
    this.store.log();

  }

}
