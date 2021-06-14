import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRockComponent } from './add-rock.component';

describe('AddRockComponent', () => {
  let component: AddRockComponent;
  let fixture: ComponentFixture<AddRockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
