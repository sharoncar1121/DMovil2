import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {ToastController} from '@ionic/angular/standalone'
import { Observable, catchError, of, tap } from 'rxjs';
import { ApiDto } from '../../interfaces/ApiDto'; 

const API = 'https://jsonplaceholder.typicode.com/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);
  private toastController: ToastController = inject(ToastController);

  getposts(): Observable<ApiDto[]>{
    return this.http.get<ApiDto[]>(`${API}posts`). pipe(tap((response)=>response),
    catchError((error)=> {
      this.handleError<ApiDto[]>('Error al obtener los posts', {} as ApiDto[]);
      throw error;
    })
    );
  }

  buildposts(model: ApiDto[]): ApiDto[]{
    return model.map((posts) => ({
      id: posts.id,
      userId: posts.userId,
      title: posts.title,
      body: posts.body,
    }))
  }

  private handleError<T>(message: string, result?: T){
    return (): Observable<T> =>{
      this.showAlert(`${message}, vuelva a intentarlo mas tarde`, true);
      return of(result as T)
    }
  }

  async showAlert(message: string, error: boolean = false): Promise <void>{
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: error?  'danger' : 'success',
    });
    await toast.present();
  }
}