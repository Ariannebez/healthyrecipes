import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-warp',
  templateUrl: './warp.page.html',
  styleUrls: ['./warp.page.scss'],
})
export class WarpPage implements OnInit {
  ingredients: string[] = [];  // Your ingredients array

  // Inject both ShoppingListService and Router in the constructor
  constructor(
    private shoppingListService: ShoppingListService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.ingredients = ['Chicken', 'Warps', 'Lettuce', 'Bufala Chese'];
  }

  addAllIngredientsToShoppingList() {
    this.ingredients.forEach(ingredient => {
      this.shoppingListService.addToShoppingList(ingredient);
    });

    // Navigate to Tab3Page
    this.router.navigateByUrl('/tabs/tab3');
  }
}

