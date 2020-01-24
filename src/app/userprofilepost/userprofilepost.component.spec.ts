import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilepostComponent } from './userprofilepost.component';

describe('UserprofilepostComponent', () => {
  let component: UserprofilepostComponent;
  let fixture: ComponentFixture<UserprofilepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
