import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-turkey-burger',
  templateUrl: './turkey-burger.page.html',
  styleUrls: ['./turkey-burger.page.scss'],
})
export class TurkeyBurgerPage implements OnInit {

  ingredients: string[] = [];  // Your ingredients array

  // Inject both ShoppingListService and Router in the constructor
  constructor(
    private shoppingListService: ShoppingListService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.ingredients = ['testing', 'Warping', 'Lettucessss', 'Bufala Chese'];
  }

  addAllIngredientsToShoppingList() {
    this.ingredients.forEach(ingredient => {
      this.shoppingListService.addToShoppingList(ingredient);
    });

    // Navigate to Tab3Page
    this.router.navigateByUrl('/tabs/tab3');
  }

}
