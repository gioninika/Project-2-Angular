import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  products: any;
  filter: any;
  spiciness: any = 0;
  nuts: boolean = false;
  vegie: boolean = false;
  value: any;
  info: any

  constructor(public productsService: ProductsService) {
  }
  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  reset() {
    this.spiciness = 0;
    this.nuts = false;
    this.vegie = false;
    return this.productsService.getFiltered(this.vegie, this.nuts, this.spiciness)
  }
  apply() {
    return this.productsService.getFiltered(this.vegie, this.nuts, this.spiciness)
  }
  All(){
    return this.productsService.getProducts()
  }
  Salads() {
    return this.productsService.getCategoriesFunc(1)
  }
  Soups() {
    return this.productsService.getCategoriesFunc(2)
  }
  ChickenDishes() {
    return this.productsService.getCategoriesFunc(3)
  }
  BeefDishes() {
    return this.productsService.getCategoriesFunc(4)
  }
  SeafoodDishes() {
    return this.productsService.getCategoriesFunc(5)
  }
  VegitableDishes() {
    return this.productsService.getCategoriesFunc(6)
  }
  BitsandBites() {
    return this.productsService.getCategoriesFunc(7)
  }
  OnTheSide() {
    return this.productsService.getCategoriesFunc(8)
  }
}
