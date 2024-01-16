import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service'; // Adjust the path as per your project structure

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  shoppingList: string[] = [];
  newItem: string = ''; // For adding new items

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.loadShoppingList();
    console.log(this.shoppingList);
  }

  loadShoppingList() {
    this.shoppingList = this.shoppingListService.getShoppingList();
  }

  

  addNewItem() {
    if (this.newItem) {
      this.shoppingListService.addToShoppingList(this.newItem);
      this.newItem = ''; // Clear the input field
      this.loadShoppingList();
    }
  }

  removeItem(index: number) {
    this.shoppingListService.removeFromShoppingList(index);
    this.loadShoppingList();
  }

  clearList() {
    this.shoppingListService.clearShoppingList();
    this.shoppingList = [];
  }
}