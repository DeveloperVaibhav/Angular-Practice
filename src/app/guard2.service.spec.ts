import { TestBed } from '@angular/core/testing';

import { Guard2Service } from './guard2.service';

describe('Guard2Service', () => {
  let service: Guard2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Guard2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
