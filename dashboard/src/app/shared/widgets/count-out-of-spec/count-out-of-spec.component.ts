import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-count-out-of-spec',
  templateUrl: './count-out-of-spec.component.html',
  styleUrls: ['./count-out-of-spec.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountOutOfSpecComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
