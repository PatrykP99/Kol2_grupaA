import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsPPComponent } from './orders-details-pp.component';

describe('OrdersDetailsPPComponent', () => {
  let component: OrdersDetailsPPComponent;
  let fixture: ComponentFixture<OrdersDetailsPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
