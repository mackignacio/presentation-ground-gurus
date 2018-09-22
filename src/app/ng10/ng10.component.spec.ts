import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng10Component } from './ng10.component';

describe('Ng10Component', () => {
  let component: Ng10Component;
  let fixture: ComponentFixture<Ng10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
