import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  ngOnInit() {
  }
  listItems: any;
 
  constructor() {
    this.listItems = [
      "1. Aylin Roberts",
      "2. Autumn Kuhic",
      "3. Tiffany Windler",
      "4. Sheila Bauch",
      "5. Diana Gerhold",
      "6. Arielle Kuhn",
      "1. Aylin Roberts",
      "2. Autumn Kuhic",
      "3. Tiffany Windler",
      "4. Sheila Bauch",
      "5. Diana Gerhold",
      "6. Arielle Kuhn",
      "1. Aylin Roberts",
      "2. Autumn Kuhic",
      "3. Tiffany Windler",
      "4. Sheila Bauch",
      "5. Diana Gerhold",
      "6. Arielle Kuhn",
      "1. Aylin Roberts",
      "2. Autumn Kuhic",
      "3. Tiffany Windler",
      "4. Sheila Bauch",
      "5. Diana Gerhold",
      "6. Arielle Kuhn",
      "1. Aylin Roberts",
      "2. Autumn Kuhic",
      "3. Tiffany Windler",
      "4. Sheila Bauch",
      "5. Diana Gerhold",
      "6. Arielle Kuhn",

    ];
  }
 
  onRenderItems(event) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
     let draggedItem = this.listItems.splice(event.detail.from,1)[0];
     this.listItems.splice(event.detail.to,0,draggedItem)
    //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
    event.detail.complete();
  }
 
  getList() {
    console.table(this.listItems);
  }

  logScrollStart(){
    console.log("logScrollStart : When Scroll Starts");
  }
 
  logScrolling(){
    console.log("logScrolling : When Scrolling");
  }
 
  logScrollEnd(){
    console.log("logScrollEnd : When Scroll Ends");
  }
  ScrollToBottom(){
    this.content.scrollToBottom(1500);
  }
 
  ScrollToTop(){
    this.content.scrollToTop(1000);
  }
 
  ScrollToPoint(X,Y){
    this.content.scrollToPoint(X,Y,1500);
  }

}
