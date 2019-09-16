import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { img_name } from '../imge-move';

ActivatedRoute
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  count_chair: string
  index_movie: string
  img = img_name

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.count_chair = params.get('count_chair')
      this.index_movie = params.get('index')
    })
    //console.log("count " + this.count_chair);
    console.log(this.index_movie);
    
  }

}
