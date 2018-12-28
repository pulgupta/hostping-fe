import { TestBed } from '@angular/core/testing';

import { HostpingService } from './hostping.service';

describe('HostpingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostpingService = TestBed.get(HostpingService);
    expect(service).toBeTruthy();
  });
});
