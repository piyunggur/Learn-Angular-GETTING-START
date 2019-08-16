import { ListProductComponent } from './list-product/list-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';


const routes: Routes = [
  {path: '' , component: ListProductComponent},
  {path: 'products/:productId', component: DetailsProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
