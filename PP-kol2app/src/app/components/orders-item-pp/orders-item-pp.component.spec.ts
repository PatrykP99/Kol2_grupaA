import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemPPComponent } from './orders-item-pp.component';

describe('OrdersItemPPComponent', () => {
  let component: OrdersItemPPComponent;
  let fixture: ComponentFixture<OrdersItemPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
