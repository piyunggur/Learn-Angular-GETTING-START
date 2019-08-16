import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit() {
  }

  share(){
    window.alert('The product has been shared!');
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

}
