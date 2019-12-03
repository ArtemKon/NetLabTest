import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { userEditData } from '../../store/actions/form.action';
import { formDataEdit } from '../../models/form.interface'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form: FormGroup
  formDataEdit$: {
    titleEdit: string;
    nameEdit: string;
    emailEdit: string;
    subMessageEdit: string;
    messageEdit: string;
  };
  
  constructor(private store: Store<formDataEdit>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      const { title, name, email, message, subMessage } = state['editData']
        return this.formDataEdit$ = {
          titleEdit: title,
          nameEdit: name,
          emailEdit: email,
          messageEdit: message,
          subMessageEdit: subMessage
        }
    } );
    
    this.form = new FormGroup ({
      nameEdit: new FormControl (this.formDataEdit$.nameEdit, Validators.required),
      emailEdit: new FormControl (this.formDataEdit$.emailEdit, [
        Validators.email,
        Validators.required
      ]),
      subMessageEdit: new FormControl(this.formDataEdit$.subMessageEdit),
      messageEdit: new FormControl(this.formDataEdit$.messageEdit, Validators.required),
    });
  }

  submitEdit() {
    const formData = {...this.form.value}; 
      this.store.dispatch(userEditData({
        titleEdit: null, 
        nameEdit: formData.nameEdit, 
        emailEdit: formData.emailEdit , 
        messageEdit: formData.messageEdit, 
        subMessageEdit: formData.subMessageEdit
      }));
  }
}
