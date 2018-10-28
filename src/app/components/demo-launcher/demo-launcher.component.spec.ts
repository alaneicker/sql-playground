import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLauncherComponent } from './demo-launcher.component';

describe('DemoLauncherComponent', () => {
  let component: DemoLauncherComponent;
  let fixture: ComponentFixture<DemoLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
