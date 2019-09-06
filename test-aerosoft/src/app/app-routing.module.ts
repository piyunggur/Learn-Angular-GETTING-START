import { EditDataComponent } from './edit-data/edit-data.component';
import { EditTypeComponent } from './edit-type/edit-type.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "", redirectTo: "edit-type",pathMatch:"full"},
  {path: "edit-type", component: EditTypeComponent},
  {path: "edit-data", component: EditDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
