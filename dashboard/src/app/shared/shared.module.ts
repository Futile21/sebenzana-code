import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatMenu, MatMenuModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { InfoCardComponent } from './widgets/info-card/info-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from './widgets/popup/popup.component';
import { PopoverComponent } from './widgets/popover/popover.component';
import { GraphComponent } from './widgets/popup/graph/graph.component';
import { CountOutOfSpecComponent } from './widgets/count-out-of-spec/count-out-of-spec.component';
import { ExtractionLinesComponent } from './widgets/extraction-lines/extraction-lines.component';
import { WaterQualityComponent } from './widgets/water-quality/water-quality.component';
import { OilQualityComponent } from './widgets/oil-quality/oil-quality.component';
import { BearingsComponent } from './widgets/bearings/bearings.component';
import { OverViewComponent } from './widgets/over-view/over-view.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    InfoCardComponent,
    PopupComponent,
    PopoverComponent,
    GraphComponent,
    CountOutOfSpecComponent,
    ExtractionLinesComponent,
    WaterQualityComponent,
    OilQualityComponent,
    BearingsComponent,
    OverViewComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
    MatCardModule,
    NgbModule,
    

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    InfoCardComponent,
    PopupComponent,
    PopoverComponent,
    GraphComponent,
    CountOutOfSpecComponent,
    ExtractionLinesComponent,
    WaterQualityComponent,
    OilQualityComponent,
    BearingsComponent,
    OverViewComponent
  ]
})
export class SharedModule { }
