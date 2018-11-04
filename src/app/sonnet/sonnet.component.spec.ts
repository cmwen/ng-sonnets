import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonnetComponent } from './sonnet.component';
import {
  MatListModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

describe('SonnetComponent', () => {
  let component: SonnetComponent;
  let fixture: ComponentFixture<SonnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SonnetComponent],
      imports: [MatListModule, MatCardModule, MatInputModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Responsibility', () => {
    it('should take a sonnet model.', () => {});
    it('should trigger an event when model changed', () => {});
  });

  describe('Interaction', () => {
    it('should render each line as editable input field and trigger model change when losing focus', () => {});
  });

  xdescribe('Future', () => {
    it('Undo', () => {});
  });
});
