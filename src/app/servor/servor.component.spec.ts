import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServorComponent } from './servor.component';

describe('ServorComponent', () => {
  let component: ServorComponent;
  let fixture: ComponentFixture<ServorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
