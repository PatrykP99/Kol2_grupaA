import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPPComponent } from './orders-pp.component';

describe('OrdersPPComponent', () => {
  let component: OrdersPPComponent;
  let fixture: ComponentFixture<OrdersPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
