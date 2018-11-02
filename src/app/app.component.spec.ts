import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-sonnets'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-sonnets');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to ng-sonnets!'
    );
  });

  describe('UI Init', () => {
    it('should load sonnets from localStorage when it is available', () => {});
    it('should initialize sonnets with default sonnets when sonnets are empty.', () => {});
  });

  describe('View', () => {
    it('should have an input box for searching the list', () => {});

    it('should have a list to show sonnets', () => {});
  });

  describe('Interaction', () => {
    it('should Search the list of sonnets via a text input box and display any matching sonnets', () => {});
    it('should update sonnets model when a sonnet is edited and save to local storage', () => {});
  });
});
