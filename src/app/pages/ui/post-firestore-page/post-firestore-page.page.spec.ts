import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostFirestorePagePage } from './post-firestore-page.page';

describe('PostFirestorePagePage', () => {
  let component: PostFirestorePagePage;
  let fixture: ComponentFixture<PostFirestorePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFirestorePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
