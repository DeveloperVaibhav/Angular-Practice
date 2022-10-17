import { TestBed } from '@angular/core/testing';

import { Guard1Service } from './guard1.service';

describe('Guard1Service', () => {
  let service: Guard1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Guard1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
