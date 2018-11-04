import { TestBed } from '@angular/core/testing';

import { SonnetStore } from './sonnet.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SonnetStore', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  });
  httpMock = TestBed.get(HttpTestingController);
});

  it('should be created', () => {
    const service: SonnetStore = TestBed.get(SonnetStore);
    expect(service).toBeTruthy();
  });

  it('should load sonnets from a storage when it is available', () => {});
  it('should initialize sonnets with default sonnets when sonnets are empty.', () => {});

});
