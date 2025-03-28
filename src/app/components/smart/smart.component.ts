import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
})
export class SmartComponent  implements OnInit {
  total:number = 0;

  private apiService = inject(ApiService)
  constructor() { }

  ngOnInit() {
    this.getTotal();
  }

  getTotal(){
    this.apiService.getTotal().then((result:number)=>{
      this.total = result;
      this.apiService.getSuccessResponse(this.total).then((successResult:string)=>{
        console.log(successResult);
      }).catch((err:string)=>{
           console.log(err);
      })
    }).catch((error:string)=>{
      console.log(error)
    }).finally(()=>{
      console.log('api is finally completed')
    })
  }

  async getTotal1(){
    try{
        this.total = await this.apiService.getTotal();
        const success = await this.apiService.getSuccessResponse(this.total);
        console.log(success);
    } catch(e){
      console.log(e);
    }
  }
  
}
