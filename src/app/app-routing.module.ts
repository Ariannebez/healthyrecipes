import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'warp',
    loadChildren: () => import('./warp/warp.module').then( m => m.WarpPageModule)
  },
  {
    path: 'turkey-burger',
    loadChildren: () => import('./turkey-burger/turkey-burger.module').then( m => m.TurkeyBurgerPageModule)
  },
  {
    path: 'recipe-details',
    loadChildren: () => import('./recipe-details/recipe-details.module').then (m => m.RecipeDetailsPageModule)
  },
  {
    path: 'potatoes',
    loadChildren: () => import('./potatoes/potatoes.module').then( m => m.PotatoesPageModule)
  },
  {
    path: 'pork',
    loadChildren: () => import('./pork/pork.module').then( m => m.PorkPageModule)
  },
  {
    path: 'chicken',
    loadChildren: () => import('./chicken/chicken.module').then( m => m.ChickenPageModule)
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
