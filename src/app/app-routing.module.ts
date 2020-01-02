import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "pricing", 
    component: PricingComponent
  },
  {
    path: "features", 
    component: FeaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
