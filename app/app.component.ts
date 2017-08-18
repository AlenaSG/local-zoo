import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <h3>{{currentAnimals}}</h3>
  </div>
  `
})

export class AppComponent {
currentAnimals: string = 'See these animals today!';
}
