import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  describe('get Method', () => {
    it('should return null when data with key does not exist in storage', () => {
      const service: StorageService = TestBed.get(StorageService);

      expect(service.get('key_should_never_exist_in_storage')).toBeNull();
    });

    it('should return the value in storage when given a key', () => {
      const service: StorageService = TestBed.get(StorageService);

      const TEST_KEY = 'test-key';
      const TEST_VALUE = 'Test Value';

      service.set(TEST_KEY, TEST_VALUE);

      expect(service.get(TEST_KEY)).toEqual(TEST_VALUE);
    });
  });
});
