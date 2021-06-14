import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRackComponent } from './update-rack.component';

describe('UpdateRackComponent', () => {
  let component: UpdateRackComponent;
  let fixture: ComponentFixture<UpdateRackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
