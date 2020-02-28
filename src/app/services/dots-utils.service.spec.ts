import { TestBed } from '@angular/core/testing';

import { DotsUtilsService } from './dots-utils.service';

describe('DotsUtilsService', () => {
  let service: DotsUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotsUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
