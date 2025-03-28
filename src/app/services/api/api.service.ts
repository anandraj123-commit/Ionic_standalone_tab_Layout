import { Injectable } from '@angular/core';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private items:any[]=[
    {id:1,name:'Product 1',price:50},
    {id:2,name:'Product 2',price:40}
  ]

  constructor() { }

  public getItems(){

    return this.items;
  }

  getTotal():Promise<number>{
    return new Promise((resolve,reject)=>{
      if(this.getItems.length == 0) reject('Items not found');
      let total = 0;
      this.items.forEach(item => {
        total += item?.price;
      })
      resolve(total);
    })
  }

  getSuccessResponse(total:number):Promise<string>{
    return new Promise((resolve,reject)=>{
      if(total>50) resolve('success');
      else reject('failure')
    })
  }
}
