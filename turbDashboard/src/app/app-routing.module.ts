import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TurbOneComponent } from './modules/turb-one/turb-one.component';


const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
    path:'',
    component: DashboardComponent,
  },{
    path:'one',
    component: TurbOneComponent,
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
