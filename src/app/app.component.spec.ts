import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import { SonnetComponent } from './sonnet/sonnet.component';
import { SonnetFilterPipe } from './sonnet-filter.pipe';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatInputModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      declarations: [AppComponent, SonnetComponent, SonnetFilterPipe]
    }).compileComponents();
    httpMock = TestBed.get(HttpTestingController);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('View', () => {
    it('should have an input box for searching the list', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('input')).toBeTruthy();
    });

    xit('should have a list to show sonnets', () => {});
  });

  xdescribe('Interaction', () => {
    it('should Search the list of sonnets via a text input box and display any matching sonnets', () => {});
    it('should update sonnets model when a sonnet is edited and save to local storage', () => {});
  });
});
