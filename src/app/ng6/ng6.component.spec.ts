import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6Component } from './ng6.component';

describe('Ng6Component', () => {
  let component: Ng6Component;
  let fixture: ComponentFixture<Ng6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
