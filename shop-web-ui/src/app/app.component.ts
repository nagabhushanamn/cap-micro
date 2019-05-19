import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'online-shopping';
  isCartOpen = false;

  constructor(private cartService: CartService) { }

  toggleCart(e) {
    e.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

  ngOnInit() {
    this.cartService.loadCart()
  }


}
