import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsFormComponent } from './demographics-form.component';

describe('DemographicsFormComponent', () => {
  let component: DemographicsFormComponent;
  let fixture: ComponentFixture<DemographicsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
