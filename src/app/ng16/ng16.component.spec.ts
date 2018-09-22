import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng16Component } from './ng16.component';

describe('Ng16Component', () => {
  let component: Ng16Component;
  let fixture: ComponentFixture<Ng16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
