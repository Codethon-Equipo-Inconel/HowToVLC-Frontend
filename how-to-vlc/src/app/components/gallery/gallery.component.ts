import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @ViewChild('gallery') gallery!: ElementRef;

  dragging = false;
  startX!: number;
  startScrollLeft!: number;

  images = [
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SACUDELO-27MARZO.jpg', alt: 'Imagen 1' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SS-MOLI-LIGHT_01st.jpg', alt: 'Imagen 2' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_SOFOCCO_10JULIO.jpg', alt: 'Imagen 3' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_11JULIO.jpg', alt: 'Imagen 4' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/03/IMG-20221129-WA0023.jpg', alt: 'Imagen 5' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SACUDELO-27MARZO.jpg', alt: 'Imagen 6' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SS-MOLI-LIGHT_01st.jpg', alt: 'Imagen 7' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_SOFOCCO_10JULIO.jpg', alt: 'Imagen 8' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_11JULIO.jpg', alt: 'Imagen 9' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/03/IMG-20221129-WA0023.jpg', alt: 'Imagen 10' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SACUDELO-27MARZO.jpg', alt: 'Imagen 11' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SS-MOLI-LIGHT_01st.jpg', alt: 'Imagen 12' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_SOFOCCO_10JULIO.jpg', alt: 'Imagen 13' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_11JULIO.jpg', alt: 'Imagen 14' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/03/IMG-20221129-WA0023.jpg', alt: 'Imagen 15' },
  ];

  onMouseDown(event: MouseEvent) {
    this.dragging = true;
    this.startX = event.pageX - this.gallery.nativeElement.offsetLeft;
    this.startScrollLeft = this.gallery.nativeElement.scrollLeft;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.dragging) return;
    const x = event.pageX - this.gallery.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1;
    this.gallery.nativeElement.scrollLeft = this.startScrollLeft - walk;
  }

  onMouseUp() {
    this.dragging = false;
  }
}


