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
    xit('should take a sonnet model.', () => {});

    it('should trigger an event when model changed', () => {
      component.sonnetModel = {number: 1, lines: ['line1']};

      component.ngOnInit();
      component.onLineChanged(0, 'updated line1');

      component.changed.subscribe(sonnet => {
        expect(sonnet).toEqual({
          number: 1, lines: ['updated line1']
        });
      });
    });

    it('should not trigger events when model is null', () => {
      component.sonnetModel = null;

      component.ngOnInit();
      component.onLineChanged(0, undefined);

      component.changed.subscribe(fail);
    });
  });

  xdescribe('Interaction', () => {
    it('should render each line as editable input field and trigger model change when losing focus', () => {});
  });

  xdescribe('Future', () => {
    it('Undo', () => {});
  });
});
