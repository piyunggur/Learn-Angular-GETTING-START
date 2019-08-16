import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from './../products';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.product = products[+params.get('productId')];
      console.log(this.product);
      
    });
  }

}
