import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionLinesComponent } from './extraction-lines.component';

describe('ExtractionLinesComponent', () => {
  let component: ExtractionLinesComponent;
  let fixture: ComponentFixture<ExtractionLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractionLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractionLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
