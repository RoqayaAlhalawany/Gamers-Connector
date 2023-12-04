import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule  // Importing the RouterTestingModule for testing the component with routing
      ],
      declarations: [
        AppComponent  // Declaring the AppComponent to be tested
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);  // Creating the component fixture
    const app = fixture.componentInstance;  // Getting the component instance
    expect(app).toBeTruthy();  // Asserting that the component is created
  });

  it(`should have as title 'GP'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GP');  // Asserting that the component's title property is 'GP'
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // Triggering change detection to update the view
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('GP app is running!');  // Asserting that the rendered view contains the expected text
  });
});
