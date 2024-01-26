import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent {
  constructor(public service:PaymentDetailService) {
  }

  onSubmit(form:NgForm){
    this.service.saveDetail().subscribe({
      next:res=>{
        this.service.list = res as PaymentDetail[];
      },
      error:err=>{console.log(err)}
    })
  }
}
