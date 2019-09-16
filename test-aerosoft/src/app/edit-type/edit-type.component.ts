import { Component, OnInit, NgModule, TemplateRef } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HasModal } from './../shared/classes/has-modal';


@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})

@NgModule({
  imports: [
    PaginationModule,
    ModalModule
  ]
})

export class EditTypeComponent extends HasModal implements OnInit {
  Mockeup: any
  ProductOnPage: any
  ProductTypes = []
  date_start: any

  constructor() {
    super()
  }

  ngOnInit() {
    this.makeDataType()
  }

  makeDataType(){
    for(let i = 0 ; i <  23; i++){
      this.Mockeup = {
        name: "ประเภทสินค้าชนิดที่ "+i,
        detail: "แสดงรายละเอียดของ ประเภทสินค้าชนิดที่ "+i,
        time_start: "12-05-2016 12:21:00",
        time_end: "14-05-2016 08:21:00"
      }
      this.ProductTypes.push(this.Mockeup)
    }
    
    this.ProductOnPage = this.ProductTypes.slice(0, 5)
  }

  pageChanged(event: any): void {
    const startItem = (event.page - 1) * event.itemsPerPage
    const endItem = event.page * event.itemsPerPage
    this.ProductOnPage = this.ProductTypes.slice(startItem, endItem);
  }

  openAddType(template: TemplateRef<any>) {
    this.date_start = new Date();
    this.openModal(template, { class: 'modal-xlg' });
  }

  addType(event: any) {
    this.ProductTypes.push(event)
  }

}
