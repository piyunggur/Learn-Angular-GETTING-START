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
  Data
  Mockeup = {
    name: "ประเภทสินค้าชนิดที่ 1",
    detail: "แสดงรายละเอียดของ ประเภทสินค้าชนิดที่ 1",
    time_start: "12-05-2016 12:21:00",
    time_end: "14-05-2016 08:21:00"
  }

  ProductTypes = [
    this.Mockeup, this.Mockeup, this.Mockeup, this.Mockeup, this.Mockeup, this.Mockeup
    , this.Mockeup, this.Mockeup, this.Mockeup, this.Mockeup, this.Mockeup, this.Mockeup
    , this.Mockeup, this.Mockeup, this.Mockeup, this.Mockeup, this.Mockeup, this.Mockeup
  ]

  ProductOnPage = this.ProductTypes.slice(0, 5)

  constructor() {
    super()
  }

  ngOnInit() {
    console.log(typeof this.ProductTypes)
  }

  pageChanged(event: any): void {
    const startItem = (event.page - 1) * event.itemsPerPage
    const endItem = event.page * event.itemsPerPage
    this.ProductOnPage = this.ProductTypes.slice(startItem, endItem);
  }

  openAddType(template: TemplateRef<any>) {
    this.openModal(template, { class: 'modal-xlg' });
  }

  addType() {
    this.Data = {
      name: " 1",
      detail: "แสดงรายละเอียดของ ประเภทสินค้าชนิดที่ 1",
      time_start: "12-05-2016 12:21:00",
      time_end: "14-05-2016 08:21:00"
    }
  }

}
