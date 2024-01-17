import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  recipes: any[] = [];
  private dataSubscription: Subscription | undefined;

  constructor(private router: Router, private sharedDataService: SharedDataService) {}

  ngOnInit() {
    // Get the initial list of recipes
    this.recipes = this.sharedDataService.getRecipes();

    // Subscribe to the event to get notified when new data is added
    this.dataSubscription = this.sharedDataService.onDataAdded.subscribe(() => {
      this.recipes = this.sharedDataService.getRecipes();
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  // Deleting recipe user adds 
  deleteRecipe(index: number) {
    this.sharedDataService.deleteRecipe(index);
  }

  openWarpPage() {
    // Going to warp page for more info
    this.router.navigate(['/warp']);
  }

  openBurgerPage() {
    // Going to turkey-burger page for more info
    this.router.navigate(['/turkey-burger']);
  }

  openPototoes() {
    // Going to potatoes page for more info
    this.router.navigate(['/potatoes']);
  }

  openPork() {
    // Going to pork page for more info
    this.router.navigate(['/pork']);
  }

  openChicken() {
    // Going to chicken page for more info
    this.router.navigate(['/chicken']);
  }
  //This opens the recpies user makes 
  openRecipeDetails(recipe: any) {
    this.sharedDataService.setCurrentRecipe(recipe);
    this.router.navigate(['/recipe-details']);
  }
 
 
}

