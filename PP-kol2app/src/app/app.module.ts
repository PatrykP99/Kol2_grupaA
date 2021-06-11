import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PPDataService} from "./services/pp-data.service";
import { OrdersPPComponent } from './components/orders-pp/orders-pp.component';
import { OrdersItemPPComponent } from './components/orders-item-pp/orders-item-pp.component';
import { OrdersDetailsPPComponent } from './components/orders-details-pp/orders-details-pp.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersPPComponent,
    OrdersItemPPComponent,
    OrdersDetailsPPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [PPDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
