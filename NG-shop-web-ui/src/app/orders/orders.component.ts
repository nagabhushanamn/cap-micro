import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Array<any> = []
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.loadAll()
      .subscribe((response: any) => {
        this.orders = response;
      })
  }

}
