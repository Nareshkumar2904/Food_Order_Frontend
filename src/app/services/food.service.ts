import { Injectable } from '@angular/core';
// import { sample_foods, sample_tags } from '../shared/data';
import { Food, Tag } from '../shared/model';
import { HttpClient } from '@angular/common/http';
import { FOOD_BY_ID_URL, FOOD_BY_SEARCH_URL, FOOD_BY_TAG_URL, FOOD_TAGS_URL, FOOD_URL } from '../shared/constants/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOOD_URL);
  }

  getAllFoodBySearch(searchFood: string) {
    return this.http.get<Food[]>(FOOD_BY_SEARCH_URL + searchFood);
  }

  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOOD_TAGS_URL);
  }
  getAllFoodsByTag(tags: string): Observable<Food[]> {
    return tags === 'All' ? this.getAll() : this.http.get<Food[]>(FOOD_BY_TAG_URL + tags);
  }
}
