import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { SharedDataService } from '../shared-data.service';

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

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {}

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

  onAddRecipe() {
    // Call the method to save data
    this.saveRecipeData(this.recipeName, this.description, this.calories);
  }

  private saveRecipeData(name: string, description: string, calories: number) {
    // Call the shared service to save the data
    this.sharedDataService.setRecipeData({ image: this.recipeImage, name, description, calories });
  }
}


