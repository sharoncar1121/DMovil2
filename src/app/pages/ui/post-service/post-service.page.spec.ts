import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostServicePage } from './post-service.page';

describe('PostServicePage', () => {
  let component: PostServicePage;
  let fixture: ComponentFixture<PostServicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
