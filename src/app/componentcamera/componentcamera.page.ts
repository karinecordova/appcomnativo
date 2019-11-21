import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-componentcamera',
  templateUrl: './componentcamera.page.html',
  styleUrls: ['./componentcamera.page.scss'],
})
export class ComponentcameraPage implements OnInit {
 foto: any;
  constructor(private camera: Camera, public change: ChangeDetectorRef) { }

  ngOnInit() {
  }
  tirarFoto(){
    alert('foto tirada');
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.foto = base64Image;
     }, (err) => {
      alert('foto não tirada');
      // Handle error
     });
  }

}
