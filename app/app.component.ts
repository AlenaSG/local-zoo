import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <h3>{{currentAnimals}}</h3>

    <ul>
       <li *ngFor="let currentAnimal of animals">{{currentAnimal.species}} <button (click)="editAnimal()">Edit!</button></li>
     </ul>
  </div>
  `
})

export class AppComponent {
currentAnimals: string = 'See these animals today!';
animals: Animal[] = [
  new Animal ('Tiger'),
  new Animal ('Giraffe'),
  new Animal ('Crocodile')
];

editAnimal() {
  alert("Edit animal?");
}
}

export class Animal {
  constructor(public species: string) { }
}
