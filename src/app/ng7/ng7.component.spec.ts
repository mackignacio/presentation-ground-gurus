import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7Component } from './ng7.component';

describe('Ng7Component', () => {
  let component: Ng7Component;
  let fixture: ComponentFixture<Ng7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
