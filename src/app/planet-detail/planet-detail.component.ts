import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  constructor(private store: PlanetStoreService) { }

  ngOnInit() {
  }

  removePlanet(){
    for( var i = 0; i < this.store.planets.length; i++){ 
      if ( this.store.planets[i].name ==(this.store.selectedPlanet.name)) {
        this.store.planets.splice(i, 1); 
      }
   }
  }

}
