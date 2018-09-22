import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng19Component } from './ng19.component';

describe('Ng19Component', () => {
  let component: Ng19Component;
  let fixture: ComponentFixture<Ng19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
