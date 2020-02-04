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
  selectedPlanet: Planet;
  planets: Planet[] = [
    { name: "Earth", moons: 1, distanceFromSun: 65000 },
    { name: "Mars", moons: 2, distanceFromSun: 75000 },
    { name: "Venus", moons: 4, distanceFromSun: 95000 },
    { name: "Neptune", moons: 7, distanceFromSun: 125000 }];


  constructor() { }


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
