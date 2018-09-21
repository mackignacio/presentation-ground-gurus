import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4Component } from './ng4.component';

describe('Ng4Component', () => {
  let component: Ng4Component;
  let fixture: ComponentFixture<Ng4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
