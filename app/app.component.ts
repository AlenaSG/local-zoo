import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <h3>{{currentAnimals}}</h3>

    <ul>
       <li>{{firstAnimal.name}}</li>
     </ul>
  </div>
  `
})

export class AppComponent {
currentAnimals: string = 'See these animals today!';
firstAnimal: Animal = new Animal ("Tiger");
}

export class Animal {
  public done: boolean = false;
  constructor(public name: string) { }
}
