import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/angular/standalone';
import { PostService } from '../../services/post-service/post-firestore.service';
import { postDto } from '../../interfaces/postDto'; 

@Component({
  selector: 'app-post-firestore-page',
  templateUrl: './post-firestore-page.page.html',
  styleUrls: ['./post-firestore-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class PostFirestorePagePage {

  private postService = inject(PostService);
  posts: postDto[] = [];

  constructor() {
   }

   ngOnInit(): void {
    this.showPosts();
    console.log('entra aqui')
  }

  showPosts(): void {
    console.log('entra aqui')
    this.postService
      .getPostByQuery()
      .then((posts) => {
        this.posts = posts;
        console.log('entra aqui en los posts')
        console.log(posts);
        console.log('entra aqui en then')
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
