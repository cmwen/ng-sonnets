import { TestBed } from '@angular/core/testing';

import { SonnetService } from './sonnet.service';

describe('SonnetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SonnetService = TestBed.get(SonnetService);
    expect(service).toBeTruthy();
  });

  it('should load sonnets from a storage when it is available', () => {});
  it('should initialize sonnets with default sonnets when sonnets are empty.', () => {});

});
