import { Component, OnInit, NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { img_name } from '../imge-move';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

@NgModule({
  imports: [ButtonsModule.forRoot()]
})

export class HomePageComponent implements OnInit {  
  image_names = img_name
  constructor() { 
  }

  ngOnInit() {
  }

}
