import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenttextPage } from './componenttext.page';

describe('ComponenttextPage', () => {
  let component: ComponenttextPage;
  let fixture: ComponentFixture<ComponenttextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenttextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenttextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
