import { TestBed } from '@angular/core/testing';

import { PostFirestoreService } from './post-firestore.service';

describe('PostFirestoreService', () => {
  let service: PostFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
