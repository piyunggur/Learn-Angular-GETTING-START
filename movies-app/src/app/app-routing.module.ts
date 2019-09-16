import { PaymentComponent } from './payment/payment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RoomComponent } from './room/room.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: "" , component: HomePageComponent},
  {path: "room/:name_movies/:index" , component: RoomComponent},
  {path: "payment/:index/:count_chair", component: PaymentComponent},
  {path: "success", component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
