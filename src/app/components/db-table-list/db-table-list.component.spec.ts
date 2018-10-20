import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbTableListComponent } from './db-table-list.component';

describe('DbTableListComponent', () => {
  let component: DbTableListComponent;
  let fixture: ComponentFixture<DbTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
