import { TestBed } from '@angular/core/testing';

import { VillageDetailsService } from './village-details.service';

describe('VillageDetailsService', () => {
  let service: VillageDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillageDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
