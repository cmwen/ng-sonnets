import { TestBed } from '@angular/core/testing';

import { SonnetStore } from './sonnet.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('SonnetStore', () => {
  let httpMock: HttpTestingController;
  let store: SonnetStore;
  const MOCK_SONNETS = [
    { number: 1, lines: ['line 1'] },
    { number: 2, lines: ['line 1'] }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpMock = TestBed.get(HttpTestingController);
    store = TestBed.get(SonnetStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should load sonnets from a storage when it is available', () => {
    store.storageService.get = s => JSON.stringify(MOCK_SONNETS);

    store.initSonnets();

    store.sonnets.subscribe(s => expect(s).toEqual(MOCK_SONNETS));
  });

  it('should initialize sonnets with default sonnets when sonnets are empty.', () => {
    store.storageService.get = s => undefined;
    store.initSonnets();
    httpMock.match('assets/shakespearesSonnets.json').forEach(r => {
      expect(r.request.method).toEqual('GET');
      r.flush(MOCK_SONNETS);
    });

    store.sonnets.subscribe(s => expect(s).toEqual(MOCK_SONNETS));
  });

  it('should support updating a sonnet', () => {
    store.storageService.get = s => JSON.stringify(MOCK_SONNETS);

    store.initSonnets();

    store.updateSonnet({
      number: 1,
      lines: ['Updated Line1']
    });

    store.sonnets.subscribe(s =>
      expect(s).toEqual([
        { number: 1, lines: ['Updated Line1'] },
        MOCK_SONNETS[1]
      ])
    );
  });

  it('should persist sonnets to a storage when sonnets updated.', () => {
    spyOn(store.storageService, 'set');

    store.storageService.get = s => JSON.stringify(MOCK_SONNETS);

    store.initSonnets();

    store.updateSonnet({
      number: 1,
      lines: ['Updated Line1']
    });

    expect(store.storageService.set).toHaveBeenCalled();
  });
});
