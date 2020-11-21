import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonEditComponent } from './person-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PersonEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonEditRoutingModule { }
