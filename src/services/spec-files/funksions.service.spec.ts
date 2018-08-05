import { TestBed, inject } from '@angular/core/testing';

import { FunksionsService } from './funksions.service';

describe('FunksionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunksionsService]
    });
  });

  it('should be created', inject([FunksionsService], (service: FunksionsService) => {
    expect(service).toBeTruthy();
  }));
});
