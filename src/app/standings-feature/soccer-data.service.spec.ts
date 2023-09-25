import { TestBed } from '@angular/core/testing';

import { SoccerDataService } from './soccer-data.service';

describe('SoccerDataService', () => {
  let service: SoccerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoccerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
