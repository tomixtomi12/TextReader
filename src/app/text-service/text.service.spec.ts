import { TestBed, inject } from '@angular/core/testing';

import { TextService } from './text.service';

describe('TextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextService]
    });
  });

  it('should ...', inject([TextService], (service: TextService) => {
    expect(service).toBeTruthy();
  }));
});
