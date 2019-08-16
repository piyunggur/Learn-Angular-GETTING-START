import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerts-product',
  templateUrl: './alerts-product.component.html',
  styleUrls: ['./alerts-product.component.css']
})
export class AlertsProductComponent implements OnInit {

  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
