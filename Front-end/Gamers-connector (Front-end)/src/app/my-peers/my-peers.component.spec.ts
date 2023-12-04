import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPeersComponent } from './my-peers.component';

describe('MyPeersComponent', () => {
  let component: MyPeersComponent;
  let fixture: ComponentFixture<MyPeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // Create a fixture and component instance for testing
    fixture = TestBed.createComponent(MyPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Expect the component to be truthy (i.e., not null or undefined)
    expect(component).toBeTruthy();
  });
});
