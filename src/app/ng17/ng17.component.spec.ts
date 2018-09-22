import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng17Component } from './ng17.component';

describe('Ng17Component', () => {
  let component: Ng17Component;
  let fixture: ComponentFixture<Ng17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
