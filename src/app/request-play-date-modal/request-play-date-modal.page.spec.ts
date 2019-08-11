import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPlayDateModalPage } from './request-play-date-modal.page';

describe('RequestPlayDateModalPage', () => {
  let component: RequestPlayDateModalPage;
  let fixture: ComponentFixture<RequestPlayDateModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPlayDateModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPlayDateModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
