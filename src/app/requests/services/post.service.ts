import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface Comment {
	postId: number,
	id: number,
	name: string,
	email: string,
	body: string
}

@Injectable()
export class PostService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getPosts() {
    return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  
  public getPost(id: number) {
	return this._httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  public getComments(id: number) {
	return this._httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
