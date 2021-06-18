import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSwitchComponent } from './update-switch.component';

describe('UpdateSwitchComponent', () => {
  let component: UpdateSwitchComponent;
  let fixture: ComponentFixture<UpdateSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
