import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '../AngularMaterial/angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AngularMaterialModule,
    
  ],
  declarations: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
