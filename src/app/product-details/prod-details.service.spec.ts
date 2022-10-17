import { TestBed } from '@angular/core/testing';

import { ProdDetailsService } from './prod-details.service';

describe('ProdDetailsService', () => {
  let service: ProdDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
