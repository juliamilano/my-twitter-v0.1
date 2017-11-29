import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectAppComponent } from './connect-app.component';

describe('ConnectAppComponent', () => {
  let component: ConnectAppComponent;
  let fixture: ComponentFixture<ConnectAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
