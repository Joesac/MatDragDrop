import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Material Drag and Drop';
  fruits = ['Banana', 'Oranges', 'Mangoes', 'Apples', 'Pineapples'];
  vegetables = ['Cacumba', 'Onions', 'Carrot', 'Tomatoes', 'Garden Eggs'];
  foodstuffs = ['Cassava', 'Okro', 'Yam', 'Gari', 'Rice'];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.fruits = this.storageService.get('fruits') || this.fruits;
    this.vegetables = this.storageService.get('vegetables') || this.vegetables;
    this.foodstuffs = this.storageService.get('foodstuffs') || this.foodstuffs;
  }

  drop(event: CdkDragDrop<string[]>) {
    const prevList = event.previousContainer.id;
    const currList = event.container.id;

    if (event.container === event.previousContainer) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

    if (prevList === 'cdk-drop-list-0') {
      this.storageService.save('fruits', event.previousContainer.data);
    }

    if (currList === 'cdk-drop-list-0') {
      this.storageService.save('fruits', event.container.data);
    }

    if (prevList === 'cdk-drop-list-1') {
      this.storageService.save('vegetables', event.previousContainer.data);
    }

    if (currList === 'cdk-drop-list-1') {
      this.storageService.save('vegetables', event.container.data);
    }

    if (prevList === 'cdk-drop-list-2') {
      this.storageService.save('foodstuffs', event.previousContainer.data);
    }

    if (currList === 'cdk-drop-list-2') {
      this.storageService.save('foodstuffs', event.container.data);
    }
  }
}
