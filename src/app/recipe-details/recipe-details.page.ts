import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipe: any;
  ingredients: string[] = []; 

  constructor(private sharedDataService: SharedDataService,
    private shoppingListService: ShoppingListService, ) {} 

  ngOnInit() {
    this.recipe = this.sharedDataService.getCurrentRecipe();
    if (!this.recipe || !this.recipe.ingredients) {
      console.error('The recipe or ingredients are undefined.');
    }
  }

  
  addAllIngredientsToShoppingList() {
    this.ingredients.forEach(ingredient => {
      this.shoppingListService.addToShoppingList(ingredient);
    });
}
}
