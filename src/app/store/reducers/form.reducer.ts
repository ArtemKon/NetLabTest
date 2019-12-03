import { Action, createReducer, on } from '@ngrx/store';

import { userSubmmit, userEditData } from '../actions/form.action';
import { formData } from '../../models/form.interface';

 
export const initialState: formData = {
  title: 'Форма пока не заполненна!',
  name: '',
  email: '',
  message: '',
  subMessage: ''
};

const formReducers= createReducer(
  initialState,
  on(userSubmmit, (state, { title, name, email, message, subMessage }) => ({
    title: title, 
    name: name, 
    email: email, 
    message: message, 
    subMessage: subMessage })
    ),
  on(userEditData,  (state, { titleEdit , nameEdit, emailEdit, messageEdit, subMessageEdit }) => ({
    title: titleEdit, 
    name: nameEdit, 
    email: emailEdit, 
    message: messageEdit, 
    subMessage: subMessageEdit })
    )
);
export function reducer (state, action: Action ) {
  return formReducers(state, action);
}

export const formFeatureKey = 'formD';
export const editFeatureKey = 'editData';
