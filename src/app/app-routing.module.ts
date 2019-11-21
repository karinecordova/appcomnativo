import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'componentcamera', loadChildren: './componentcamera/componentcamera.module#ComponentcameraPageModule' },
  { path: 'componentcamera', loadChildren: './componentcamera/componentcamera.module#ComponentcameraPageModule' },
  { path: 'componenttext', loadChildren: './componenttext/componenttext.module#ComponenttextPageModule' },
  { path: 'qrcode', loadChildren: './qrcode/qrcode.module#QrcodePageModule' },
  { path: 'lista', loadChildren: './lista/lista.module#ListaPageModule' },
  { path: 'components', loadChildren: './components/components.module#ComponentsPageModule' },
  { path: 'pedido/:id_mesa', loadChildren: './pedido/pedido.module#PedidoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
