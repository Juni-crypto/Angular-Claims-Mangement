import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClaimStatusResultComponent } from './view-claim-status-result.component';

describe('ViewClaimStatusResultComponent', () => {
  let component: ViewClaimStatusResultComponent;
  let fixture: ComponentFixture<ViewClaimStatusResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClaimStatusResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClaimStatusResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
