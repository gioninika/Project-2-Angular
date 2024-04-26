import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckPageComponent } from './pages/check-page/check-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'Cart', component: CartPageComponent},
  {path: 'Check', component: CheckPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
