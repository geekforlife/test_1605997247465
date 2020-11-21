import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list.component';
import { CompanyListRoutingModule } from './company-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CompanyListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CompanyListComponent
  ]
})
export class CompanyListModule { }
