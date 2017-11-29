import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverAppComponent } from './discover-app.component';

describe('DiscoverAppComponent', () => {
  let component: DiscoverAppComponent;
  let fixture: ComponentFixture<DiscoverAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
