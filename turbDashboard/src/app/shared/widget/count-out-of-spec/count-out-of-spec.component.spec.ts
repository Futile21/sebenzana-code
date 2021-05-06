import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountOutOfSpecComponent } from './count-out-of-spec.component';

describe('CountOutOfSpecComponent', () => {
  let component: CountOutOfSpecComponent;
  let fixture: ComponentFixture<CountOutOfSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountOutOfSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountOutOfSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
