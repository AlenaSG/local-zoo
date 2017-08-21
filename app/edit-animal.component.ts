import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3>{{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>
        <div>
          <h3>Edit Animal</h3>
          <div>
            <label>Enter Animal Name:</label>
            <input [(ngModel)]="childSelectedAnimal.name">
          </div>
          <div>
            <label>Enter Animal Age:</label>
            <input [(ngModel)]="childSelectedAnimal.age">
          </div>
          <div>
            <label>Enter Animal Number of Caretakers:</label>
            <input [(ngModel)]="childSelectedAnimal.caretakers">
          </div>
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
    </div>

  `
})

  export class EditAnimalComponent {
    @Input() childSelectedAnimal: Animal;
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  }
