import { Component, OnInit,inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonCard, IonCardHeader, IonRow, IonRouterOutlet, isPlatform } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonRow, IonCardHeader, IonCard, IonCol, IonGrid,  
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
  ]
})
export class HomePage implements OnInit {


 selectImage:any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  // checkPlatform(){
  //    if(Capacitor.getPlatform() == 'web') return true;
  //    return false;
  // }

  navigateToNetwork() {
    this.router.navigate(['/tabs/tab1/home/network']);
  }

  async share(){
      await Share.share({
         title: 'See cool stuff',
         text: 'Really awesome thing you need to see right meow',
         url: 'http://ionicframework.com/',
         dialogTitle: 'Share with buddies',
    });
  }

  async camera(){
    let status = await Camera.requestPermissions();
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        source:CameraSource.Prompt,
        width:600,
        resultType: Capacitor.getPlatform() === 'web' ? CameraResultType.DataUrl : CameraResultType.Uri
      });
      console.log("image",image);
      var imageUrl = image.webPath ?? '';
      this.selectImage = image.webPath;
    
      // Can be set to the src of an image now
      const imageElement = document.getElementById('imageElement') as HTMLImageElement;
      if (imageElement) {
        imageElement.src = imageUrl;
      } else {
        console.error('Image element not found');
      }
}

async sharePic(){
      let shareRet = await Share.share({
            title:'Image Sharing',
            text:'Share this image',
            url:this.selectImage, // 
            dialogTitle:'Image Sharing'
      })
}
}
