import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-txn-list',
  templateUrl: './txn-list.component.html',
  styleUrls: ['./txn-list.component.scss']
})
export class TxnListComponent implements OnInit {

  txns: Array<any>
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let apiUrl = "http://localhost:8181/api/accounts/1/txns";
    this.http.get(apiUrl)
      .subscribe((response: any) => {
        this.txns = response
      })
  }

}
