import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClaimStatusComponent } from './view-claim-status.component';

describe('ViewClaimStatusComponent', () => {
  let component: ViewClaimStatusComponent;
  let fixture: ComponentFixture<ViewClaimStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClaimStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClaimStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
