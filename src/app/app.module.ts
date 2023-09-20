import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './home/home.page';
import { EmployeePage } from './employee/employee.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,TabsPage,HomePage,EmployeePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
