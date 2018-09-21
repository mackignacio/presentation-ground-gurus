import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng8Component } from './ng8.component';

describe('Ng8Component', () => {
  let component: Ng8Component;
  let fixture: ComponentFixture<Ng8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
