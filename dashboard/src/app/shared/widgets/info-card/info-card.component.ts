import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCardComponent implements OnInit {


  @Input() label: string;
  @Input() total: string;
  @Input() data: [];



  constructor() { }

  ngOnInit() {

  }

}
