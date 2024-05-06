import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-gradient',
  template: '<canvas #backgroundCanvas class="background-canvas"></canvas>',
  styles: [`
    .background-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
    }
  `]
})
export class GradientComponent implements OnInit, OnDestroy {
  private intervalId: any;
  private animationId: any;
  private step = 0;
  private colorIndices = [0, 1, 2, 3];
  private gradientSpeed = 0.005; // Velocidad de transición

  // Paleta de colores
  private colors = [
    [3, 4, 33], // Azul muy oscuro (#030421)
    [200, 30, 200], // Magenta (RGB: 200, 0, 200)
    [38, 26, 75], // Morado oscuro (#261A4B)
    [75, 0, 130], // Índigo (#4B0082)
    [255, 105, 180], // Rosa suave (#FF69B4)
    [70, 100, 180], // Azul suave (#4682B4)
  ];

  // Configuración de las bolas
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private balls: any[] = [];
  private numBalls = 10; // Número de bolas
  private ballRadius = 20; // Radio de las bolas
  private speed = 0.5; // Velocidad de las bolas (ajustada a un valor más bajo)

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Configura el canvas
    this.canvas = document.querySelector('.background-canvas');
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
    }

    // Inicializa las bolas
    this.initBalls();

    // Inicia la animación del degradado y las bolas
    this.intervalId = setInterval(() => this.updateGradient(), 10);
    this.animationId = requestAnimationFrame(() => this.animateBalls());
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    cancelAnimationFrame(this.animationId);
  }

  initBalls() {
    // Inicializa las posiciones y velocidades de las bolas
    for (let i = 0; i < this.numBalls; i++) {
      this.balls.push({
        x: Math.random() * this.canvas!.width,
        y: Math.random() * this.canvas!.height,
        dx: Math.random() < 0.5 ? this.speed : -this.speed,
        dy: Math.random() < 0.5 ? this.speed : -this.speed,
        color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)` // Color aleatorio con transparencia
      });
    }
  }

  animateBalls() {
    // Limpia el canvas
    this.ctx!.clearRect(0, 0, this.canvas!.width, this.canvas!.height);

    // Aplica desenfoque al contexto del canvas
    this.ctx!.filter = 'blur(10px)'; // Ajusta el valor de blur según sea necesario

    // Dibuja las bolas
    for (const ball of this.balls) {
      this.ctx!.beginPath();
      this.ctx!.fillStyle = ball.color;
      this.ctx!.arc(ball.x, ball.y, this.ballRadius, 0, Math.PI * 2);
      this.ctx!.fill();

      // Actualiza la posición de las bolas
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Rebotar las bolas en los límites del canvas
      if (ball.x < this.ballRadius || ball.x > this.canvas!.width - this.ballRadius) {
        ball.dx = -ball.dx;
      }
      if (ball.y < this.ballRadius || ball.y > this.canvas!.height - this.ballRadius) {
        ball.dy = -ball.dy;
      }
    }

    // Solicita la siguiente animación
    this.animationId = requestAnimationFrame(() => this.animateBalls());
  }

  updateGradient() {
    const bodyElement = document.body;

    // Calcula los colores de transición
    const c0_0 = this.colors[this.colorIndices[0]];
    const c0_1 = this.colors[this.colorIndices[1]];
    const c1_0 = this.colors[this.colorIndices[2]];
    const c1_1 = this.colors[this.colorIndices[3]];

    const istep = 1 - this.step;
    const r1 = Math.round(istep * c0_0[0] + this.step * c0_1[0]);
    const g1 = Math.round(istep * c0_0[1] + this.step * c0_1[1]);
    const b1 = Math.round(istep * c0_0[2] + this.step * c0_1[2]);
    const color1 = `rgb(${r1}, ${g1}, ${b1})`;

    const r2 = Math.round(istep * c1_0[0] + this.step * c1_1[0]);
    const g2 = Math.round(istep * c1_0[1] + this.step * c1_1[1]);
    const b2 = Math.round(istep * c1_0[2] + this.step * c1_1[2]);
    const color2 = `rgb(${r2}, ${g2}, ${b2})`;

    // Aplica el fondo degradado al cuerpo
    const backgroundGradient = `linear-gradient(to right, ${color1}, ${color2})`;
    this.renderer.setStyle(bodyElement, 'background', backgroundGradient);

    // Lógica de transición
    this.step += this.gradientSpeed;
    if (this.step >= 1) {
      this.step %= 1;
      this.colorIndices[0] = this.colorIndices[1];
      this.colorIndices[2] = this.colorIndices[3];

      // Selecciona nuevos índices de color aleatoriamente
      this.colorIndices[1] = (this.colorIndices[1] + Math.floor(1 + Math.random() * (this.colors.length - 1))) % this.colors.length;
      this.colorIndices[3] = (this.colorIndices[3] + Math.floor(1 + Math.random() * (this.colors.length - 1))) % this.colors.length;
    }
  }
}
