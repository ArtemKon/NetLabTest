import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { userSubmmit } from '../../store/actions/form.action';
import { formData } from '../../models/form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup
  clickToggle = false
                                 
  constructor(private store: Store<formData>){ 
  }
  
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('',  Validators.required),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      subMessage: new FormControl(''),
      message: new FormControl('', Validators.required)
    });
  }
  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value};
      this.store.dispatch(userSubmmit({
        title: null, 
        name: formData.name, 
        email: formData.email , 
        message: formData.message, 
        subMessage: formData.subMessage
      }));
    }
  }
  onRemuve() {
    this.form.reset()
  }
  onBackPage() {
    window.history.back();
  }
}
