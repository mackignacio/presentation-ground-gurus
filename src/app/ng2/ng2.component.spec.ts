import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2Component } from './ng2.component';

describe('Ng2Component', () => {
  let component: Ng2Component;
  let fixture: ComponentFixture<Ng2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
