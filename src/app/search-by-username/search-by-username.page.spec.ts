import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByUsernamePage } from './search-by-username.page';

describe('SearchByUsernamePage', () => {
  let component: SearchByUsernamePage;
  let fixture: ComponentFixture<SearchByUsernamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByUsernamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByUsernamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
