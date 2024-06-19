import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from '@angular/fire/firestore';
import { postDto } from '../../interfaces/postDto';

const PATH = 'Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, PATH);
  


  async getPostByQuery(): Promise<postDto[]> {
    try {
      const postQuery = query(
        this._collection,
        where('active', '==', true),
        orderBy('id', 'desc')
      );
      const photoSnapshot = await getDocs(postQuery);
      const posts: postDto[] = [];

      photoSnapshot.forEach(doc => {
        posts.push(doc.data() as postDto);
      });

      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }
}
