import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  id_mesa: any;
  sub:any;
  constructor(private route: ActivatedRoute) {

    this.sub = this.route.params.subscribe(params => {
      this.id_mesa = params['id_mesa']; 
    });
   }

  ngOnInit() {
   
  }

}
