import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-pork',
  templateUrl: './pork.page.html',
  styleUrls: ['./pork.page.scss'],
})
export class PorkPage implements OnInit {

  ingredients: string[] = [];  // Your ingredients array

  // Inject both ShoppingListService and Router in the constructor
  constructor(
    private shoppingListService: ShoppingListService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.ingredients = ['4 peppers', '200g minced pork', '1 garlic clove', 'Ground cumin', 'Paprika powder', 'Bulgur wheat','Vegetable stock'];
  }

  addAllIngredientsToShoppingList() {
    this.ingredients.forEach(ingredient => {
      this.shoppingListService.addToShoppingList(ingredient);
    });

    // Navigate to Tab3Page
    this.router.navigateByUrl('/tabs/tab3');
  }

}
