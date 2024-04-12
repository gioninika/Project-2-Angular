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
  spiciness: any = 0
  nuts: boolean = false
  vegie: boolean = false
value: any;
  constructor(public productsService: ProductsService ) {
  }
  ngOnInit() {
    this.productsService.getProducts().subscribe((data) =>{
      this.products = data
    })
  }
  reset(){
    this.spiciness = 0
    this.nuts = false
    this.vegie = false
  }
  apply(){
    return this.productsService.getFiltered(this.vegie,this.nuts,this.spiciness);
  }
}
