import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFirewallComponent } from './update-firewall.component';

describe('UpdateFirewallComponent', () => {
  let component: UpdateFirewallComponent;
  let fixture: ComponentFixture<UpdateFirewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFirewallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFirewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
