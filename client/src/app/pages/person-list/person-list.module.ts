import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list.component';
import { PersonListRoutingModule } from './person-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PersonListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PersonListComponent
  ]
})
export class PersonListModule { }
