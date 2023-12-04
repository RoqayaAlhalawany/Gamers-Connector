import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound404Component } from './not-found404.component';

describe('NotFound404Component', () => {
  let component: NotFound404Component;
  let fixture: ComponentFixture<NotFound404Component>;

  beforeEach(async () => {
    // Configure the testing module by declaring the component under test
    await TestBed.configureTestingModule({
      declarations: [ NotFound404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // Create a fixture for the component and obtain its instance
    fixture = TestBed.createComponent(NotFound404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Perform an assertion to check if the component was created successfully
    expect(component).toBeTruthy();
  });
});
