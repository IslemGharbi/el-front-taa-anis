import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServorComponent } from './add-servor.component';

describe('AddServorComponent', () => {
  let component: AddServorComponent;
  let fixture: ComponentFixture<AddServorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
