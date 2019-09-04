import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {path: "" , component: HomePageComponent},
  {path: "room/:name_movices" , component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
