import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@Component({
  selector: 'app-componenttext',
  templateUrl: './componenttext.page.html',
  styleUrls: ['./componenttext.page.scss'],
})
export class ComponenttextPage implements OnInit {
  textoaserfalado:string = "Olá mundo";
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }
  falar(){
    this.tts.speak({
      text: this.textoaserfalado,
      locale: 'pt-BR',
      rate: 0.75,

    }).then(()=>{
      alert("Falou com sucesso");
    })
    .catch((erro:any)=>{
      alert(erro);
    })
  }

}
