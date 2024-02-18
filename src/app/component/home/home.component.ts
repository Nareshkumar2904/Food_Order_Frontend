import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    // let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchFood) {
        this.foods = this.foodService.getAllFoodBySearch(params.searchFood)
      } else if (params.tag) {
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      }
      else {
        this.foods = foodService.getAll();
      }

      // foodsObservable.subscribe((serverFoods) => {
      //     this.foods = serverFoods;
      //   },
      //   (error) => {
      //     console.error('Error fetching foods:', error);
      //   }
      // );
    })
  }
}
