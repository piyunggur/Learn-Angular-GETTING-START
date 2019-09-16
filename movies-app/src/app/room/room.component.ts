import { img_name } from './../imge-move';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RoomService } from './../service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  // providers: [RoomService]
})

export class RoomComponent implements OnInit {

  name_movies: string
  data_room: any
  status_chair: string
  count_chair :number
  indexs_movies: string
  constructor(private route: ActivatedRoute,private roomService: RoomService) { }

  ngOnInit() {
    this.count_chair = 0
    this.route.paramMap.subscribe(params => {
      this.name_movies = params.get('name_movies')
      this.indexs_movies = params.get('index')
    })
    this.data_room = this.roomService.movies[this.name_movies]
    // console.log(this.data_room);
    
  }

  selectBTN(index_row: number,chair: any){
    // console.log(index_row,chair);
    if(chair.status === 'idle'){
      chair.status = 'select'
      this.count_chair += 1
    }else if(chair.status === 'select'){
      chair.status = 'idle'
      this.count_chair -= 1
    }
     this.roomService.setData(this.name_movies, index_row, chair.number-1, chair.status)
  }

}
