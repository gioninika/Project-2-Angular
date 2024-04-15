import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  products: any;
  categories: any
  filter: any;
  nuts: boolean = false
  spiciness: any = "Not Chosen"
  spicinessValue: any = 0
  vegie: boolean = false;
  value: any;
  info: any

  constructor(public productsService: ProductsService) {
    
  }
  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }
  spicinessChange(){
    if(this.spicinessValue == 0){
      this.spiciness = "Not Chosen"
    }else {
      this.spiciness = this.spicinessValue - 1
    }
  }
  reset() {
    this.spiciness = "Not Chosen"
    this.spicinessValue = 0
  }

  apply() {

  }

}
