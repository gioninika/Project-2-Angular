import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = "https://restaurant.stepprojects.ge/api/Products/GetAll"
  productList: any
  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get(this.apiUrl).subscribe((data) => {
      this.productList = data
    })
    return this.productList
  }
  // getBasket(){
  //   return this.http.get(this.apiUrl + "Baskets/GetAll")
  // }
  // addToBasket(product:){
  //   return this.http.get(this.apiUrl + "Baskets/AddToBasket", )
  // }
}
