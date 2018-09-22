import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng18Component } from './ng18.component';

describe('Ng18Component', () => {
  let component: Ng18Component;
  let fixture: ComponentFixture<Ng18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
