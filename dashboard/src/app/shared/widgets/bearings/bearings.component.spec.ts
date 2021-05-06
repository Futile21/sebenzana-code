import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearingsComponent } from './bearings.component';

describe('BearingsComponent', () => {
  let component: BearingsComponent;
  let fixture: ComponentFixture<BearingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
