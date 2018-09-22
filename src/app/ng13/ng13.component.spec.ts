import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng13Component } from './ng13.component';

describe('Ng13Component', () => {
  let component: Ng13Component;
  let fixture: ComponentFixture<Ng13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
