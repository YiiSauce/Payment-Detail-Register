import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }
  url:string = environment.apiBaseUrl+"/PaymentDetails";
  list:PaymentDetail[] = [];
  refrechList(){
    this.http.get(this.url).subscribe({
      next:res=>{
        this.list = res as PaymentDetail[];
        console.log(this.list);
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
