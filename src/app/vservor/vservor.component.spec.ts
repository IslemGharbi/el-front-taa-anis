import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VservorComponent } from './vservor.component';

describe('VservorComponent', () => {
  let component: VservorComponent;
  let fixture: ComponentFixture<VservorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VservorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VservorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
