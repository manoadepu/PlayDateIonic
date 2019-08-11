import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDisplayModalPage } from './message-display-modal.page';

describe('MessageDisplayModalPage', () => {
  let component: MessageDisplayModalPage;
  let fixture: ComponentFixture<MessageDisplayModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDisplayModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDisplayModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
