import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <select>
      <option value="allAnimals">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals" selected="selected">Mature Animals</option>
    </select>
  <ul>
     <li *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity">{{currentAnimal.species}} <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></li>
   </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();


filterByMaturity: string = "matureAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
      this.clickSender.emit(animalToEdit);
    }

    onChange(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }
}
