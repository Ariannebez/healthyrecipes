import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private recipeData: {
    image: string | undefined;
    name: string;
    description: string;
    calories: number;
  } | undefined;

  onDataAdded = new EventEmitter<void>(); // Event emitter

  constructor() { }

  public setRecipeData(data: { image: string | undefined; name: string; description: string; calories: number; }) {
    this.recipeData = data;
    this.onDataAdded.emit(); // Emit event when new data is set
  }

  public getRecipeData() {
    return this.recipeData;
  }
}

