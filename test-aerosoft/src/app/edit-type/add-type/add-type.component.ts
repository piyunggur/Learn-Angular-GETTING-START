import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Modal } from 'src/app/shared/classes/modal'
import { FormGroup, FormBuilder } from '@angular/forms'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent extends Modal implements OnInit {

  @Output() OpenEditModal = new EventEmitter()
  @Input() date_start;

  test: any
  formType: FormGroup

  constructor( private builer: FormBuilder,private datePipe: DatePipe ) {
    super()
    this.formType = this.builer.group({
      name:[''],
      detail:[''],
      time_start: "12-05-2016 12:21:00",
      time_end: "14-05-2016 08:21:00"
    })
  }

  ngOnInit() {
    console.log(this.date_start);
    this.test = this.datePipe.transform(this.date_start,'yyyy-MM-dd');
    console.log("getDay "  + this.test);
    // this.test = new Date(this.date_start).getDate;
    // console.log("getDate " + this.test);
    // this.test = new Date(this.date_start).getMonth;
    // console.log("getMonth "  + this.test);
    // this.test = new Date(this.date_start).getHours;
    // console.log("getHours "  + this.test);
    // this.test = new Date(this.date_start).getTime;
    // console.log("getTime "  + this.test);
    // this.test = new Date(this.date_start).getFullYear;
    // console.log("getFullYear "  + this.test);
    // this.test = new Date(this.date_start).toISOString;
    // console.log("toISOString "  + this.test);
    // console.log("getFullYear "  + this.test);
    // console.log("toISOString "  + this.test);
    
  }

  outFormType(){
    this.OpenEditModal.emit(this.formType.value)
    this.close()
  }

}
