import { Component, OnInit,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonButton, NavController, IonItem, IonLabel, IonText, IonList, IonListHeader } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {ApiService} from '../../services/api/api.service';
import { ProductDumbComponent } from 'src/app/components/product-dumb/product-dumb.component';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.page.html',
  styleUrls: ['./sub-page.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonList, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ProductDumbComponent]
})
export class SubPagePage implements OnInit {

  private apiService = inject(ApiService);

  items:any[]=[];

  private navController = inject(NavController);

  constructor() { }

  ngOnInit() {
    this.items = this.apiService.getItems();
  }

  goBack(){
    this.navController.navigateRoot('tabs/tab1/home');
  }


  synchronous(){
    console.log('start');
    for(let i=0;i<100;i++){
      console.log('Timeout')
    }
    console.log('End')
  }


  async asynchronous(){
    console.log('start');
    setTimeout(()=>{
      console.log('Timeout')
    },2000)
    console.log('End')
  }
}
