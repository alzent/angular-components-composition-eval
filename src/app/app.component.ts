import { Component } from '@angular/core';
import { ICar } from './icar';

//
// deleteCarEventBus und singleCarRef werden in car.component.ts eingebunden bzw. abgehoert
//

@Component({
  selector: 'app-root',
  template: `
  <cartag *ngFor="let carx of cars"
  (deleteCarEventBus)="deleteCarX(carx)" [singleCarRef]="carx">
    </cartag>
  `,
  styles: []
})

export class AppComponent {

  cars:Array<ICar> = [
    {make: 'bmw', model: 'm3'},
    {make: 'porsche', model: '911'},
    {make: 'bmw', model: 'm3'}
  ];

  deleteCarX(car: ICar){

    console.warn('AppComponent.deleteCarX called... car: ' + JSON.stringify(car));
  }

}
