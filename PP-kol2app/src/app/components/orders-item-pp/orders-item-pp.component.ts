import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'orders-item-pp',
  templateUrl: './orders-item-pp.component.html',
  styleUrls: ['./orders-item-pp.component.css']
})
export class OrdersItemPPComponent implements OnInit {

  @Input() image: string;
  @Input() text: string;
  @Input() id: number;
  @Input() price: number;
  @Input() title: number;

  constructor() { }

  ngOnInit(): void {
  }

}
