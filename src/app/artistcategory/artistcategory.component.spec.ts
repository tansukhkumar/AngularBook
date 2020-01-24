import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistcategoryComponent } from './artistcategory.component';

describe('ArtistcategoryComponent', () => {
  let component: ArtistcategoryComponent;
  let fixture: ComponentFixture<ArtistcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
