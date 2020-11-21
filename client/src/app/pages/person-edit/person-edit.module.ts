import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonEditComponent } from './person-edit.component';
import { PersonEditRoutingModule } from './person-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PersonEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PersonEditComponent
  ]
})
export class PersonEditModule { }
