import { Component, Input, OnInit } from '@angular/core';

import { IonItem,IonLabel,IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-dumb',
  templateUrl: './product-dumb.component.html',
  styleUrls: ['./product-dumb.component.scss'],
  standalone:true,
  imports:[IonItem,IonLabel,IonText]
})
export class ProductDumbComponent  implements OnInit {
  @Input() item:any;
  constructor() { }

  ngOnInit() {

  }
 

}
