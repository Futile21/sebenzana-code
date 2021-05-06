import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DashboardService } from '../dashboard.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards =[];
  pieChart = [];
  card1 = [];



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();




  }

}
