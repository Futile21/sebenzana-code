import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurbOneComponent } from './turb-one.component';

describe('TurbOneComponent', () => {
  let component: TurbOneComponent;
  let fixture: ComponentFixture<TurbOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurbOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurbOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
