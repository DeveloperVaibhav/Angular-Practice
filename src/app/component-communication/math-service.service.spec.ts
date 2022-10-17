import { TestBed } from '@angular/core/testing';

import { MathServiceService } from './math-service.service';

describe('MathServiceService', () => {
  let service: MathServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
