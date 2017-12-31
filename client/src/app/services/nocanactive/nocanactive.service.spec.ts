import { TestBed, inject } from '@angular/core/testing';

import { NocanactiveService } from './nocanactive.service';

describe('NocanactiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NocanactiveService]
    });
  });

  it('should be created', inject([NocanactiveService], (service: NocanactiveService) => {
    expect(service).toBeTruthy();
  }));
});
