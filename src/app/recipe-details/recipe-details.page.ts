import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { ShoppingListService } from '../shopping-list.service';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipe: any;
  ingredients: string[] = []; 

  constructor(private sharedDataService: SharedDataService,
    private shoppingListService: ShoppingListService,
    private router: Router ) {} 

    ngOnInit() {
      this.recipe = this.sharedDataService.getCurrentRecipe();
      
      if (this.recipe && this.recipe.ingredients) {
        // Assuming recipe.ingredients is an array of ingredient names
        this.ingredients = this.recipe.ingredients;
      } else {
        console.error('The recipe or ingredients are undefined.');
        // You may want to add additional error handling here
      }
    }

  
  addAllIngredientsToShoppingList() {
    this.ingredients.forEach(ingredient => {
      this.shoppingListService.addToShoppingList(ingredient);
    });

    // Navigate to Tab3Page
    this.router.navigateByUrl('/tabs/tab3');
}
}
