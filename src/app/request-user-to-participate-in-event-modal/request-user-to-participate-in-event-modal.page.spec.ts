import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUserToParticipateInEventModalPage } from './request-user-to-participate-in-event-modal.page';

describe('RequestUserToParticipateInEventModalPage', () => {
  let component: RequestUserToParticipateInEventModalPage;
  let fixture: ComponentFixture<RequestUserToParticipateInEventModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestUserToParticipateInEventModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUserToParticipateInEventModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
