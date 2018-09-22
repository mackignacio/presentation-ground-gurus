import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng1Component } from './ng1.component';

describe('Ng1Component', () => {
  let component: Ng1Component;
  let fixture: ComponentFixture<Ng1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
