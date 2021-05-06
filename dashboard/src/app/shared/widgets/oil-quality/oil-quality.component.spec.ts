import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilQualityComponent } from './oil-quality.component';

describe('OilQualityComponent', () => {
  let component: OilQualityComponent;
  let fixture: ComponentFixture<OilQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
