import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembyComponent } from './assemby.component';

describe('AssembyComponent', () => {
  let component: AssembyComponent;
  let fixture: ComponentFixture<AssembyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
