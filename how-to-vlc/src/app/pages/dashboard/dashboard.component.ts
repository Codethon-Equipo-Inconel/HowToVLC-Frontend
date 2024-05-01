import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../eventos/componentes/gallery/gallery.component';
import { LocalidadesServicesService } from 'src/app/services/localidades-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  fotosEventos = new GalleryComponent; //Instancia del componente GalleryComponent para acceder al array de imagenes

  localidades: any[] = [];

  constructor(private localidadesService: LocalidadesServicesService) {}

  ngOnInit(): void {
    this.localidadesService.obtenerLocalidades().subscribe((response: any) => {
      this.localidades = response.data; // Los datos están en la propiedad 'data' de la respuesta
    });
  }
}
