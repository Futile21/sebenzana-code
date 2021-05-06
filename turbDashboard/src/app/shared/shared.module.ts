import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountOutOfSpecComponent } from './widget/count-out-of-spec/count-out-of-spec.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    CountOutOfSpecComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CountOutOfSpecComponent,
  ]
})
export class SharedModule { }
