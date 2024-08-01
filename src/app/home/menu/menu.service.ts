import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  mealDate = new BehaviorSubject<Date>(new Date);
  mealId = new BehaviorSubject<number>(1);

  meals() {
    return [
        {
            id: 1,
            name: 'Breakfast',
        },
        {
            id: 2,
            name: 'Lunch',
        },
        {
            id: 3,
            name: 'Dinner',
        }
      ]
  }

  getMeals() {
    return Promise.resolve(this.meals().slice(0, 3));
}
}
