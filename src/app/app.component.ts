import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add,arrowBack } from 'ionicons/icons';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
     this.addAllIcons();
  }
  addAllIcons(){
    addIcons({
      add,
      arrowBack
    })
  }
}
