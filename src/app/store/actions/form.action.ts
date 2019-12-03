import { createAction,props } from '@ngrx/store';

import { formData, formDataEdit }  from '../../models/form.interface';

export const userSubmmit = createAction(
  '[Home pages] Submit form',
  props<{
    title: formData['title']; 
    name: formData['name']; 
    email: formData['email']; 
    message: formData['message']; 
    subMessage: formData['subMessage']
  }>()
);
export const userEditData = createAction(
  '[Home pages] Edit form',
  props<{
    titleEdit: formDataEdit['titleEdit']; 
    nameEdit: formDataEdit['nameEdit']; 
    emailEdit: formDataEdit['emailEdit']; 
    messageEdit: formDataEdit['messageEdit']; 
    subMessageEdit: formDataEdit['subMessageEdit']
  }>()
);

