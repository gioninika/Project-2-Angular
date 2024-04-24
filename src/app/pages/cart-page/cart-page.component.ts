import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
items: any
prices!: number
quantitys!: number
pricess!: number
constructor(public productsService: ProductsService){}

ngOnInit() {
  this.productsService.getBasket().subscribe((data) =>{
    this.items = data
    this.quantitys = this.items.quantity
    this.pricess = this.items.product.price
    this.prices = this.quantitys * this.prices
  })
}
}

