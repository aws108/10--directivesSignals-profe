import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  counter = signal(10); //esto es una señal de escritura
  squareCounter = computed(() => this.counter()*this.counter()); //esto es una señal de tipo lectura //1

  constructor() {}

  increaseBy (value: number) {
    this.counter.update(current => current + value); //valor actual => valor de retorno
  }

}


/*
1-> La señal de lectura o computada estará pendiente de las señales de escritura. Si la señal cambia, aquí también se modifica, vuelve a computar y
    va a actualizar todos los valores de squareCounter. Esto es mejor que usar cualquier operador de rxjs, porque no hay que suscribirse ni destruir nada.



*/