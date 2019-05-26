import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = {}

  constructor(private _http: HttpClient) { }

  getItemQty(productId) {
    return this.cart[productId] ? this.cart[productId].qty : 0;
  }

  getCartSize() {
    return Object.keys(this.cart).length;
  }

  getCartLines() {
    let keys = Object.keys(this.cart);
    return keys.map(key => {
      return this.cart[key];
    })
  }


  loadCart() {
    //this.cart = JSON.parse(localStorage.getItem('cart')) || []
    let apiUrl = "http://localhost:8182/api/users/Nag/cart";
    this._http.get(apiUrl)
      .subscribe(response => {
        this.cart = response;
      })
  }

  submitNewOrder() {
    let apiUrl = "http://localhost:8183/api/users/Nag/orders";
    this._http.post(apiUrl, {})
      .subscribe(response => {
        console.log(response)
        this.cart = {}
      })
  }

  addToCart(e) {
    let { item, qty } = e; // ==> de-structuring
    let line = this.cart[item.id];
    if (line) {
      line = { ...line, qty: line.qty + qty }
    } else {
      line = { item, qty: 1 }
    }
    //this.cart = { ...this.cart, [item.id]: line }
    //localStorage.setItem('cart', JSON.stringify(this.cart))

    let apiUrl = "http://localhost:8182/api/users/Nag/cart";
    this._http.post(apiUrl, { ...line })
      .subscribe(response => {
        this.cart = { ...this.cart, [item.id]: line }
      })

  }

}
