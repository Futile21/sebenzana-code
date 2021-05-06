import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-water-quality',
  templateUrl: './water-quality.component.html',
  styleUrls: ['./water-quality.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaterQualityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
