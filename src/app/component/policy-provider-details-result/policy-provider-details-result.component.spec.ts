import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyProviderDetailsResultComponent } from './policy-provider-details-result.component';

describe('PolicyProviderDetailsResultComponent', () => {
  let component: PolicyProviderDetailsResultComponent;
  let fixture: ComponentFixture<PolicyProviderDetailsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyProviderDetailsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyProviderDetailsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
