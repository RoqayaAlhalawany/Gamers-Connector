import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileSettingsComponent } from './profile-settings.component';

describe('ProfileSettingsComponent', () => {
  let component: ProfileSettingsComponent;
  let fixture: ComponentFixture<ProfileSettingsComponent>;

  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      declarations: [ ProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // Create an instance of the component for testing
    fixture = TestBed.createComponent(ProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Verify that the component is created
    expect(component).toBeTruthy();
  });
});
