import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaydatesPage } from './playdates.page';

describe('PlaydatesPage', () => {
  let component: PlaydatesPage;
  let fixture: ComponentFixture<PlaydatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaydatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaydatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
