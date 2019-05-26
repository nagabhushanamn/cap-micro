import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  loadAll() {
    let url = "http://localhost:8183/api/users/Nag/orders";
    return this.http.get(url);
  }
}
