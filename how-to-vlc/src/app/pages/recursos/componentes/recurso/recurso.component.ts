import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.css']
})
export class RecursoComponent implements OnInit{

  @Input() linkFoto!: string;
  @Input() nombre!: string;
  @Input() empresa!: string;
  @Input() web!: string;
  @Input() shortWeb!: string;
  @Input() telefono!: string;
  @Input() email?: string;
  @Input() ofrece!: string[];
  @Input() descargaios!: string;
  @Input() descargaAndr!: string;

  constructor() {

  }

  ngOnInit(): void {

  }
}
