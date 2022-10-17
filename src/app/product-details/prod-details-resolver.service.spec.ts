import { TestBed } from '@angular/core/testing';

import { ProdDetailsResolverService } from './prod-details-resolver.service';

describe('ProdDetailsResolverService', () => {
  let service: ProdDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
