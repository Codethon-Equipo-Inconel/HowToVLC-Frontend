import { Component } from '@angular/core';
import { GalleryComponent } from '../eventos/componentes/gallery/gallery.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  fotosEventos = new GalleryComponent;

}
