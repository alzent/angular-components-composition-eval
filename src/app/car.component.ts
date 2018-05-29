import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'cartag',
  template: `
    <p>
      {{car.make}} : {{car.model}}
      <button (click)="deleteMyCar(car)">Delete</button>
    </p>
  `,
  styles: []
})

export class CarComponent implements OnInit {

  @Input('singleCarRef') car: ICar; // @Input-Properties erlaubt Uebergabe der Instanzen, die Felder enthalten 

  // Event Emitter vorbereiten
  @Output() deleteCarEventBus = new EventEmitter();

  // Aufruf ist im Template definiert
  deleteMyCar(car: ICar){
    this.deleteCarEventBus.emit(car);

    console.warn('CarComponent.deleteMyCar called');
  }


  constructor() { }

  ngOnInit() {

  }
}