import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyProviderDetailsComponent } from './policy-provider-details.component';

describe('PolicyProviderDetailsComponent', () => {
  let component: PolicyProviderDetailsComponent;
  let fixture: ComponentFixture<PolicyProviderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyProviderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyProviderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
