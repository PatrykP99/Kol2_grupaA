import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersPPComponent} from "./components/orders-pp/orders-pp.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersPPComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
