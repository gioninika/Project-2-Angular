import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = "https://restaurant.stepprojects.ge/api/"
  productList: any
  constructor(private http: HttpClient) { }

  getProducts() {
      return this.http.get(this.apiUrl + "Products/GetAll")
    }
  getBasket(){
    return this.http.get(this.apiUrl + "Baskets/GetAll")
  }
  addToBasket(id: any){
    let postReq ={
      "quantity": 1,
      "price": 0,
      "productId": id
    }
    return this.http.post(this.apiUrl + "Baskets/AddToBasket", postReq).subscribe()
  }
  deleteBasket(id: any){
    return this.http.delete(this.apiUrl + `Baskets/DeleteProduct/${id}`).subscribe()
  }
}
