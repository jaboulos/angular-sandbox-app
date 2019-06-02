import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextUserComponent } from './next-user.component';

describe('NextUserComponent', () => {
  let component: NextUserComponent;
  let fixture: ComponentFixture<NextUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
