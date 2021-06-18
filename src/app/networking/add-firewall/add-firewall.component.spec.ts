import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirewallComponent } from './add-firewall.component';

describe('AddFirewallComponent', () => {
  let component: AddFirewallComponent;
  let fixture: ComponentFixture<AddFirewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFirewallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFirewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
