import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng11Component } from './ng11.component';

describe('Ng11Component', () => {
  let component: Ng11Component;
  let fixture: ComponentFixture<Ng11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
