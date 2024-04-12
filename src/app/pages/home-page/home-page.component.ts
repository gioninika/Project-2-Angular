import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  products: any
  filter: any
  
  constructor(public productsService: ProductsService ) {
  }
  ngOnInit() {
    this.productsService.getProducts().subscribe((data) =>{
      this.products = data
    })
  }
}
