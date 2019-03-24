import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantlistComponent } from './resturantlist.component';

describe('ResturantlistComponent', () => {
  let component: ResturantlistComponent;
  let fixture: ComponentFixture<ResturantlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
