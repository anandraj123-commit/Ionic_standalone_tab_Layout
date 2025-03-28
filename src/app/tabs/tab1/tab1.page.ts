import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonLabel,IonNav } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { IonButton } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { NavigationExtras, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular/standalone';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonButton,IonIcon,RouterLink,IonLabel],
})
export class Tab1Page {
  constructor(private router:Router,private NavController:NavController) {
  }

  navigate(){
    // this.router.navigate(['/tabs/sub-page'], { replaceUrl: true }); or
    this.NavController.navigateRoot('/tabs/sub-page');
  }

  navigateByUrl(){
    this.router.navigateByUrl('/tabs/sub-page')
  }

  navigateForward(){
    this.NavController.navigateForward('/tabs/sub-page');
  }

  sendNavigationextras(){
    const data = {id:1,name:'Coding Example'};
    const navData: NavigationExtras ={
      queryParams:{
        data:JSON.stringify(data),
      }
    };
    this.router.navigate(['/','tabs','tab1','home'],navData);
  }
}
