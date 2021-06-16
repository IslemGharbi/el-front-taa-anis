import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSideBArComponent } from './test-side-bar.component';

describe('TestSideBArComponent', () => {
  let component: TestSideBArComponent;
  let fixture: ComponentFixture<TestSideBArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSideBArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSideBArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
