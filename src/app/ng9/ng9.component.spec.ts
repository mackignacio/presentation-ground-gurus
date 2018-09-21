import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng9Component } from './ng9.component';

describe('Ng9Component', () => {
  let component: Ng9Component;
  let fixture: ComponentFixture<Ng9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
