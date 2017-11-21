import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentBlockComponent } from './main-content-block.component';

describe('MainContentBlockComponent', () => {
  let component: MainContentBlockComponent;
  let fixture: ComponentFixture<MainContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
