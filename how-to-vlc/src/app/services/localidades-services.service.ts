import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesServicesService {

  private apiUrl = 'https://apiv1.geoapi.es/municipios?CPRO=46&type=JSON&key=&sandbox=1';

  constructor(private http: HttpClient) {}

  obtenerLocalidades(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
