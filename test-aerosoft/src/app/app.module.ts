import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTypeComponent } from './edit-type/edit-type.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddTypeComponent } from './edit-type/add-type/add-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export let AppInjector: Injector;
@NgModule({
  declarations: [
    AppComponent,
    EditTypeComponent,
    EditDataComponent,
    AddTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
