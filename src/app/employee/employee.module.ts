import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';
import { AngularMaterialModule } from '../AngularMaterial/angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularMaterialModule,
    EmployeePageRoutingModule
  ],
  declarations: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class EmployeePageModule {}
