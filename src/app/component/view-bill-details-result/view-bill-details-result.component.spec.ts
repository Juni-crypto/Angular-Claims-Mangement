import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillDetailsResultComponent } from './view-bill-details-result.component';

describe('ViewBillDetailsResultComponent', () => {
  let component: ViewBillDetailsResultComponent;
  let fixture: ComponentFixture<ViewBillDetailsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBillDetailsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBillDetailsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
