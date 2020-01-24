import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersidemenuComponent } from './usersidemenu.component';

describe('UsersidemenuComponent', () => {
  let component: UsersidemenuComponent;
  let fixture: ComponentFixture<UsersidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
