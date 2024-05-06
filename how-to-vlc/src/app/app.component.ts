import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'how-to-vlc';
  private intervalId: any;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit() {
    // Añadir el degradado al estilo global
    this.intervalId = setInterval(() => {
      const gradientEl = this.elRef.nativeElement;
      const gradient = document.querySelector('#gradient');

      if (!gradient) {
        // Si el elemento #gradient no existe, es posible que aún no se haya cargado el componente de degradado.
        return;
      }

      const computedStyle = window.getComputedStyle(gradient);
      this.renderer.setStyle(
        gradientEl,
        'background',
        computedStyle.background
      );
    }, 10);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
