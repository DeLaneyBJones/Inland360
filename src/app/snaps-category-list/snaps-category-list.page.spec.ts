import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapsCategoryListPage } from './snaps-category-list.page';

describe('SnapsCategoryListPage', () => {
  let component: SnapsCategoryListPage;
  let fixture: ComponentFixture<SnapsCategoryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapsCategoryListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapsCategoryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
