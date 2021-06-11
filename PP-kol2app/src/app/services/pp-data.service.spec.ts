import { TestBed } from '@angular/core/testing';

import { PPDataService } from './pp-data.service';

describe('PPDataService', () => {
  let service: PPDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PPDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
