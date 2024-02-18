import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../shared/data';
import { Food, Tag } from '../shared/model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodBySearch(searchFood: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchFood.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return sample_tags
  }
  getAllFoodsByTag(tags: string): Food[] {
    return tags === 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tags))
  }

  getFoodById(foodId: string): Food {
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
}
