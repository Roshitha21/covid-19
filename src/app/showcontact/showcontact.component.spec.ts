import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcontactComponent } from './showcontact.component';

describe('ShowcontactComponent', () => {
  let component: ShowcontactComponent;
  let fixture: ComponentFixture<ShowcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
