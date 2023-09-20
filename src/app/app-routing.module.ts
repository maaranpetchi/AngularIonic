
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component:TabsPage ,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
          },
          {
            path: 'software',
            loadChildren: () => import('./software/software.module').then( m => m.SoftwarePageModule)
          },
          {
            path: 'employee',
            loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
          }
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

