import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { TurbOneComponent } from 'src/app/modules/turb-one/turb-one.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule,  MatPaginatorModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    TurbOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,


  ]
})
export class DefaultModule { }
