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

  deletePlanet(){
    
  }

}
