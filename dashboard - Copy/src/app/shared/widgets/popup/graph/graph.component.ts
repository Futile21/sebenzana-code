import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input() data: any = [];

  constructor() { }

  chartOptions:{};
  Highcharts = Highcharts;

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
      // series: this.data
      series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
  };
  }
}
