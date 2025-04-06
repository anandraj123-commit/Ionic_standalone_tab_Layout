import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Network, ConnectionStatus} from '@capacitor/network';
import { PluginListenerHandle } from '@capacitor/core';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NetworkPage implements OnInit,OnDestroy {

  private networkListener!: PluginListenerHandle;
  status!:string;

  constructor(private ngZone:NgZone){

  }

  async ngOnInit() {
    const status = await Network.getStatus();
    this.ngZone.run(() => {
      this.changeDetection(status);
    });

    this.networkListener = await Network.addListener('networkStatusChange', (status) => {
      this.ngZone.run(() => {
        console.log('Network status changed:', status);
        this.changeDetection(status);
      });
    });
  }

  async changeDetection(status:ConnectionStatus){
    this.status = status.connected ? 'Online' : 'Offline';
    await Toast.show({
      text: this.status,
    });
   
  }

  ngOnDestroy() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }
}