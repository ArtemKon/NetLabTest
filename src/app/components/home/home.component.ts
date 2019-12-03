import { Component} from '@angular/core';
import { Store } from '@ngrx/store';


import { formData } from '../../models/form.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  FormData$: {}

  constructor(private store: Store<formData>){
    this.store.subscribe(state => {
      const { title, name, email, message, subMessage } = state['formD']
      return this.FormData$ = {
        title: title,
        name: name,
        email: email,
        message: message,
        subMessage: subMessage
      }
    });
  }
  isString(val) { return typeof val === 'string';}
}
