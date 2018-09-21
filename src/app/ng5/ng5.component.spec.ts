import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5Component } from './ng5.component';

describe('Ng5Component', () => {
  let component: Ng5Component;
  let fixture: ComponentFixture<Ng5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
