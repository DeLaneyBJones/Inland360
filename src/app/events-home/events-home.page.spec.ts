import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsHomePage } from './events-home.page';

describe('EventsHomePage', () => {
  let component: EventsHomePage;
  let fixture: ComponentFixture<EventsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
