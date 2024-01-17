import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipe: any;

  constructor(private sharedDataService: SharedDataService) {} // or RecipeService

  ngOnInit() {
    this.recipe = this.sharedDataService.getCurrentRecipe();
    if (!this.recipe || !this.recipe.ingredients) {
      console.error('The recipe or ingredients are undefined.');
    }
  }

}
