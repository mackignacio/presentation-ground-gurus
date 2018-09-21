import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng12Component } from './ng12.component';

describe('Ng12Component', () => {
  let component: Ng12Component;
  let fixture: ComponentFixture<Ng12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
