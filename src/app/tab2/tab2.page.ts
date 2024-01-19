import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  recipeImage: string | undefined;
  recipeName: string = ''; // Add variables to hold form data
  description: string = '';
  calories: number = 0;
  //ingredients: string = ''; //change to array 
  ingredients: string[] = [];
  //ingredients = "ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7"

  constructor(private sharedDataService: SharedDataService,
    private router: Router) {}
 
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      this.recipeImage = image.webPath;
    } catch (error) {
      console.error('Camera issue:', error);
    }
  }

  ngOnInit(){ }
  

  onAddRecipe() {
    
    // Looping through the ingredient fields and add each name to the ingredients array
    this.ingredient.forEach(ing => {
      if (ing.name.trim()) { // Check if the ingredient name is not just empty spaces
        this.ingredients.push(ing.name);
      }
      // Navigate to Tab3Page
    this.router.navigateByUrl('/tabs/tab1');
    });
  
    // Calling the method to save data
    this.saveRecipeData(this.recipeName, this.description, this.calories, this.ingredients);
  }
  
  private saveRecipeData(name: string, description: string, calories: number, ingredients: string[]) {
  
    this.sharedDataService.addRecipeData({ image: this.recipeImage, name, description, calories, ingredients });
  }


   //Adding  ingredients
  // Initialize the ingredients array
  ingredient: { name: string }[] = [{ name: '' }];

  

  // Method to add a new ingredient field
  addIngredient() {
    this.ingredient.push({ name: '' });
  }

  // Method to remove an ingredient field
  removeIngredient(index: number) {
    // Check the length of the `ingredient` array, not `ingredients`
    if (this.ingredient.length > 1) {
      this.ingredient.splice(index, 1); // Remove the ingredient at the given index
    } else {
      // Optionally reset the first item instead of removing it
      this.ingredient[0].name = '';
    }
  }
}



