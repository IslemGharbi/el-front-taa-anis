import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServorComponent } from './update-servor.component';

describe('UpdateServorComponent', () => {
  let component: UpdateServorComponent;
  let fixture: ComponentFixture<UpdateServorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
