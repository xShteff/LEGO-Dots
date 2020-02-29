import { TestBed } from '@angular/core/testing';

import { StudInteractionService } from './stud-interaction.service';

describe('StudInteractionService', () => {
  let service: StudInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
