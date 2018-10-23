import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbConnectionFormComponent } from './db-connection-form.component';

describe('DbConnectionFormComponent', () => {
  let component: DbConnectionFormComponent;
  let fixture: ComponentFixture<DbConnectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbConnectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbConnectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
