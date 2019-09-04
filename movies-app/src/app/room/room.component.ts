import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {

  name_movices;
  numbers = [{n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8},{n:9},{n:10},{n:11},{n:12},{n:13},{n:14},{n:15}];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name_movices = params.get('name_movices')
    })
  }

}
