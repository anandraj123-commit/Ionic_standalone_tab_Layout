import { Component, OnInit,inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons,NavController, IonButton, IonIcon, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api/api.service';
import { ProductDumbComponent } from 'src/app/components/product-dumb/product-dumb.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonButton,
    IonIcon,
    ProductDumbComponent
  ]
})
export class HomePage implements OnInit {

  private route =inject(ActivatedRoute);
  public navController =inject(NavController);
  private apiService = inject(ApiService);

  items:any[]=[];

  constructor() { }

  ngOnInit() {
    const data = this.route.snapshot.queryParams;
    if(data?.['data']){
      const result = JSON.parse(data['data']);
      console.log(result?.id);
    }
    this.items = this.apiService.getItems();
  }


}
