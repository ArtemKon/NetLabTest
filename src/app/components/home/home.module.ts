import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { formFeatureKey, reducer } from '../../store/reducers/form.reducer';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(formFeatureKey, reducer)
  ],
  exports: []
})
export class FormModule { }