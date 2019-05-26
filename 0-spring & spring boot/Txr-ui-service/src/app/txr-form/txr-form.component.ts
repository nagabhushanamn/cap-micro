import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-txr-form',
  templateUrl: './txr-form.component.html',
  styleUrls: ['./txr-form.component.scss']
})
export class TxrFormComponent implements OnInit {

  txrForm: FormGroup;
  status: string = ''

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.txrForm = this.fb.group({
      fromAccNum: [''],
      toAccNum: [''],
      amount: [0]
    })
  }

  handleSubmit() {
    let apiUrl = "http://localhost:8181/api/txr";
    this.http.post(apiUrl, this.txrForm.value)
      .subscribe((response: any) => {
        this.txrForm.reset()
        this.status = response.status
      })
  }

}
