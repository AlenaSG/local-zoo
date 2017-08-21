import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <h3>{{currentAnimals}}</h3>

 <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

     <hr>

     <div>
     <div *ngIf="selectedAnimal">
          <h3>{{selectedAnimal.name}} the {{selectedAnimal.species}}</h3>
      <div>
        <h3>Edit Animal</h3>
        <div>
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="selectedAnimal.name">
        </div>
        <div>
          <label>Enter Animal Age:</label>
          <input [(ngModel)]="selectedAnimal.age">
        </div>
        <div>
          <label>Enter Animal Number of Caretakers:</label>
          <input [(ngModel)]="selectedAnimal.caretakers">
        </div>
        <button (click)="finishedEditing()">Done</button>
        </div>
    </div>
  </div>
  </div>
  `
})

export class AppComponent {
currentAnimals: string = 'See these animals today!'

selectedAnimal = null;


masterAnimalList: Animal[] = [
  new Animal ('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
  new Animal ('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
  new Animal ('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Femail', 'Delicate roots and leaves', 'Loud noises')
];

editAnimal(clickedAnimal) {
  this.selectedAnimal = clickedAnimal;
}

finishedEditing() {
    this.selectedAnimal = null;
  }
}
