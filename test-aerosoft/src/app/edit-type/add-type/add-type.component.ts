import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Modal } from 'src/app/shared/classes/modal'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent extends Modal implements OnInit {

  @Output() OpenEditModal = new EventEmitter()
  formType: FormGroup

  constructor( private builer: FormBuilder ) {
    super()
    this.formType = this.builer.group({
      name:[''],
      detail:['']
    })
  }

  ngOnInit() {

  }

  outFormType(){
    this.OpenEditModal.emit(this.formType);
    close();
  }

}
