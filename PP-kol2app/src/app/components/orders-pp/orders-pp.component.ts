import { Component, OnInit } from '@angular/core';
import {PPDataService} from "../../services/pp-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'orders-pp',
  templateUrl: './orders-pp.component.html',
  styleUrls: ['./orders-pp.component.css']
})
export class OrdersPPComponent implements OnInit {

  public title = '';
  public text: string;
  public image: string;
  public id: number;

  constructor(private ppDataService: PPDataService, private route:
    ActivatedRoute) { }

  ngOnInit(): void {
  }

}
