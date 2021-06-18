import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRouterComponent } from './update-router.component';

describe('UpdateRouterComponent', () => {
  let component: UpdateRouterComponent;
  let fixture: ComponentFixture<UpdateRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
