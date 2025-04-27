import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Planta } from './planta';

@Injectable({providedIn: 'root'})
export class PlantaService {
    private plantServiceUrl = environment.plantServiceUrl;

constructor(private http: HttpClient) { }

getPlants(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.plantServiceUrl);
}

}
