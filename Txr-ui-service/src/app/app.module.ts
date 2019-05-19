import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TxrFormComponent } from './txr-form/txr-form.component';
import { TxnListComponent } from './txn-list/txn-list.component';

const routes:Routes=[
  {path:'txr',component:TxrFormComponent},
  {path:'txns',component:TxnListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TxrFormComponent,
    TxnListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
