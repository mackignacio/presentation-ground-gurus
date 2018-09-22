import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng20Component } from './ng20.component';

describe('Ng20Component', () => {
  let component: Ng20Component;
  let fixture: ComponentFixture<Ng20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
