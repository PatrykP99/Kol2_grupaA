import {Component, OnInit} from '@angular/core';
import {PPDataService} from "../../services/pp-data.service";

@Component({
  selector: 'orders-details-pp',
  templateUrl: './orders-details-pp.component.html',
  styleUrls: ['./orders-details-pp.component.css']
})
export class OrdersDetailsPPComponent implements OnInit {

  public items$: any;

  constructor(private service: PPDataService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }
}
