import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


// OPEN LAYERS

@Component({
  selector: 'app-openlayers,',
  templateUrl: './openlayers.component.html',
  styleUrls: ['./openlayers.component.css'],
})
export class OpenlayersComponent implements OnInit {
  map: Map | undefined; // Initialisée en undefined

  constructor() {
    // Initialisez la propriété map ici si nécessaire
  }

  ngOnInit(): void {
    // Config de la carte OpenLayers
    this.map = new Map({
      target: 'map', // ID de l'élément HTML cible
      layers: [
        new TileLayer({
          source: new OSM(), // Utilisation de la source OSM par défaut pour les tuiles
        }),
      ],
      view: new View({
        center: [0, 0], // Coordonnées la carte
        zoom: 2, // Zoom initial
      }),
    });
  }
}

