import { Injectable } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  getShoppingListObservable() {
    throw new Error('Method not implemented.');
  }
  private shoppingList: string[] = [];

  constructor() {
    this.loadShoppingList();
  }

  //ngOnDestroy (){this.loadShoppingList();}
  

  getShoppingList() {
    return this.shoppingList;
  }

 

  addToShoppingList(item: string) {
    this.shoppingList.push(item);
    this.saveShoppingList();
    console.log('Item added:', item); // Debugging line
  }

  removeFromShoppingList(index: number) {
    this.shoppingList.splice(index, 1);
    this.saveShoppingList();
  }

  clearShoppingList() {
    this.shoppingList = [];
    this.saveShoppingList();
  }

  private saveShoppingList() {
    localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
  }

  private loadShoppingList() {
    const storedList = localStorage.getItem('shoppingList');
    if (storedList) {
      this.shoppingList = JSON.parse(storedList);
    }
  }
}

