import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTypeComponent } from './edit-type/edit-type.component';
import { EditDataComponent } from './edit-data/edit-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EditTypeComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
