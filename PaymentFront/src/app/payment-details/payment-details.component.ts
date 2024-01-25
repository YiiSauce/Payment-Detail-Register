import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
})
export class PaymentDetailsComponent implements OnInit{
  constructor(private service:PaymentDetailService) {
  }
  ngOnInit(): void {
    this.service.refrechList();
  }

}
