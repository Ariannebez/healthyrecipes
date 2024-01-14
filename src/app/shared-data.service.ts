import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private recipes: any[] = [];
  onDataAdded = new EventEmitter<void>();

  constructor() {
    this.loadRecipes();
  }

  private saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }

  private loadRecipes() {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      this.recipes = JSON.parse(storedRecipes);
    }
  }

  public addRecipeData(data: any) {
    this.recipes.push(data);
    this.saveRecipes();
    this.onDataAdded.emit();
  }

  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.saveRecipes();
    this.onDataAdded.emit();
  }

  public getRecipes() {
    return this.recipes;
  }
}



