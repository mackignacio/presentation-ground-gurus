import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng14Component } from './ng14.component';

describe('Ng14Component', () => {
  let component: Ng14Component;
  let fixture: ComponentFixture<Ng14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
