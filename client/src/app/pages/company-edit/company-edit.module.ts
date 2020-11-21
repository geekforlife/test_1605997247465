import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyEditComponent } from './company-edit.component';
import { CompanyEditRoutingModule } from './company-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CompanyEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CompanyEditComponent
  ]
})
export class CompanyEditModule { }
