import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { formFeatureKey, reducer } from '../../store/reducers/form.reducer';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path: '', component: FormComponent 
      }
    ]),
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(formFeatureKey, reducer)
  ],
  exports: [RouterModule]
})
export class FormModule { }
