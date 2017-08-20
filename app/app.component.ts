import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <h3>{{currentAnimals}}</h3>

    <ul>
       <li *ngFor="let currentAnimal of animals">{{currentAnimal.species}} <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
     </ul>

     <hr>

     <div>
          <h3>{{selectedAnimal.species}} {{selectedAnimal.name}}</h3>

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
  </div>
  </div>
  `
})

export class AppComponent {
currentAnimals: string = 'See these animals today!';
animals: Animal[] = [
  new Animal ('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
  new Animal ('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
  new Animal ('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Femail', 'Delicate roots and leaves', 'Loud noises')
];

selectedAnimal: Animal = this.animals[0];

editAnimal(clickedAnimal) {
  this.selectedAnimal = clickedAnimal;
}
}


export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) { }
}
