import { Component, Input, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


// import {SharedDATA} from '../../shared.service'



@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input() data: any = [];


  constructor() { }
  Highcharts = Highcharts;
  chartOptions:{};
  

  // series = data1


  title = 'Angular 9 HighCharts';

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
          text: 'Historic and Estimated Worldwide Population Growth by Region'
      },
      subtitle: {
          text: 'Source: Sebenzana'
      },
      credits:{
        enabled:false
        },
      exporting:{
        enabled:true
        },
      // xAxis: {
      //     categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      //     tickmarkPlacement: 'on',
      //     title: {
      //         enabled: false
      //     }
      // },
      // yAxis: {
      //     title: {
      //         text: 'Billions'
      //     },
      //     labels: {
      //         formatter: function () {
      //             return this.value / 1000;
      //         }
      //     }
      // },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      // plotOptions: {
      //     area: {
      //         stacking: 'normal',
      //         lineColor: '#666666',
      //         lineWidth: 1,
      //         marker: {
      //             lineWidth: 1,
      //             lineColor: '#666666'
      //         }
      //     }
      // },
      series: this.data
  };
  }


}