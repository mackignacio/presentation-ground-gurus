import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng15Component } from './ng15.component';

describe('Ng15Component', () => {
  let component: Ng15Component;
  let fixture: ComponentFixture<Ng15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
