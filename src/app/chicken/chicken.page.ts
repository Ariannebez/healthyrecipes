import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.page.html',
  styleUrls: ['./chicken.page.scss'],
})
export class ChickenPage implements OnInit {
  ingredients: string[] = [];  // Your ingredients array

  constructor(
    private shoppingListService: ShoppingListService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.ingredients = ['Olive oil', '4 Skinless chicken breasts', '2 Onions', '4 Garlic cloves', 'Sweet Paprika powder', 'Chicken stock','Dijon mustard', 'Worcestershire sauce','200g soured cream', 'Rice or pasta'];
  }

  addAllIngredientsToShoppingList() {
    this.ingredients.forEach(ingredient => {
      this.shoppingListService.addToShoppingList(ingredient);
    });

    // Navigate to Tab3Page
    this.router.navigateByUrl('/tabs/tab3');
  }

}
