import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditComponent } from './edit.component';
import { editFeatureKey, reducer } from '../../store/reducers/form.reducer';




@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(editFeatureKey, reducer)
  ],
  exports: [],
  bootstrap: [EditComponent]
})
export class EditModule { }
