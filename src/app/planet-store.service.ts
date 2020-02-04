import { Injectable } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetStoreService {

  showDetails: boolean = false;
  showList: boolean = false;
  showCreate: boolean = true;
  showError: boolean = false;
  planets: Planet[] = [];
  selectedPlanet: Planet;

  constructor() {}


  addPlanet(planet: Planet) {
    this.planets.push(planet);
  }

  sortPlanets() {
    this.planets.sort((a, b) => (a.distanceFromSun > b.distanceFromSun) ? 1 : -1)
  }

  log() {
    console.log(this.planets);
  }

  getPlanets() {
    return this.planets;
  }
}
