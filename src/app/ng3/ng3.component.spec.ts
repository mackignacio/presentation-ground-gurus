import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng3Component } from './ng3.component';

describe('Ng3Component', () => {
  let component: Ng3Component;
  let fixture: ComponentFixture<Ng3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
