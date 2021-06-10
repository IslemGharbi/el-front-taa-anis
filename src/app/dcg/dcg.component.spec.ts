import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcgComponent } from './dcg.component';

describe('DcgComponent', () => {
  let component: DcgComponent;
  let fixture: ComponentFixture<DcgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
