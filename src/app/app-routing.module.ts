import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckPageComponent } from './pages/check-page/check-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'Cart', component: CartPageComponent},
  {path: 'Check', component: CheckPageComponent},
  {path: 'Pay', component: PaymentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
