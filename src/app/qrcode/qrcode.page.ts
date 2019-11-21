import { Component, OnInit } from '@angular/core';
import {  BarcodeScannerOptions,  BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage  {
  encodeData: any;
   //id_mesa="kaka"; 
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  id_mesa:any;
  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController, private navCtrl: NavController, private router: Router) {
    
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
 
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(async barcodeData => {
     //   alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
        this.id_mesa=this.scannedData["text"];

        if(this.scannedData["text"]=="kaka"){  
          const alert = await this.alertController.create({
            header: 'Iniciar Pedido!',
            message: JSON.stringify(barcodeData),
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  console.log('Confirm Cancel: blah');
                }
              }, {
                text: 'OK',
                handler: () => {
                  console.log('Confirm Okay');
                  this.goToPedido(this.id_mesa);
                }
              }
            ]
          });      
          await alert.present();
        }
        else{
          alert("Qr code INVÁLIDO ");
        }
      })       
      .catch(err => {
        console.log("Erro", err);
      });
    
  }

  goToPedido(id_mesa) {
    this.router.navigate(['/pedido', id_mesa]);
  }

}

  


