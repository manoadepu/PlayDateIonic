import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySearchedUserPage } from './display-searched-user.page';

describe('DisplaySearchedUserPage', () => {
  let component: DisplaySearchedUserPage;
  let fixture: ComponentFixture<DisplaySearchedUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySearchedUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySearchedUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
