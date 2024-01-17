import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-potatoes',
  templateUrl: './potatoes.page.html',
  styleUrls: ['./potatoes.page.scss'],
})
export class PotatoesPage implements OnInit {

  ingredients: string[] = [];  // Your ingredients array

  // Inject both ShoppingListService and Router in the constructor
  constructor(
    private shoppingListService: ShoppingListService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.ingredients = ['4 large potatoes', '3 x 135g cans tuna', 'mayonnaise', '4 spring onions', '1 ginger', '1 lemon','320g spinach'];
  }

  addAllIngredientsToShoppingList() {
    this.ingredients.forEach(ingredient => {
      this.shoppingListService.addToShoppingList(ingredient);
    });

    // Navigate to Tab3Page
    this.router.navigateByUrl('/tabs/tab3');
  }

}
