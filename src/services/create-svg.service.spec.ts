import { TestBed, inject } from '@angular/core/testing';

import { CreateSvgService } from './create-svg.service';

describe('CreateSvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateSvgService]
    });
  });

  it('should be created', inject([CreateSvgService], (service: CreateSvgService) => {
    expect(service).toBeTruthy();
  }));
});
