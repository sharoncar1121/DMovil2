import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/angular/standalone';
import { ApiService } from '../../services/Api-service/api.service';
import { ApiDto } from '../../interfaces/ApiDto';


@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.page.html',
  styleUrls: ['./post-service.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class PostServicePage implements OnInit {
  posts: ApiDto[] = [];

  constructor(private postService: ApiService) { }

 
  ngOnInit(): void {
    this.postService.getposts().subscribe({
      next: (response: ApiDto[]) => {
        this.posts = this.postService.buildposts(response);
      },
      error: (err) => {
        console.error('Error fetching characters', err);
      }
    });
  }
}
