import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-plantas',
  standalone: false,
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  constructor(private plantaService: PlantaService) { }
  plantas: Array<Planta> = [];
  plantasInterior: number = 0;
  plantasExterior: number = 0;

  getPlantas() {
    this.plantaService.getPlants().subscribe(plantas => {
      this.plantas = plantas;
      this.calculateTipe();
    });
    
  }

  calculateTipe() {
    this.plantasInterior = 0;
    this.plantasExterior = 0;
    this.plantas.forEach((planta) => {
      if (planta.tipo == "Exterior") {
        this.plantasExterior++;
      }

      if (planta.tipo == "Interior") {
        this.plantasInterior++;
      }
    });
  }

  ngOnInit() {
    this.getPlantas();
    
  }

}
