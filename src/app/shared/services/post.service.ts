import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PostModel} from '../models';
import {environment} from 'src/environments/environment';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {
  }

  loadPost(postId: number): Observable<PostModel> {
    const url = environment.host + '/api/Post/' + postId;
    return this.http.get<PostModel>(url);
  }

  createPost(post: PostModel): Observable<PostModel> {
    const url = environment.host + '/api/Post/';
    const body = post;
    return this.http.post<PostModel>(url, body);
  }

  loadPosts(groupId: number): Observable<PostModel[]> {
    const url = environment.host + '/api/Post/';

    const options = {
      params: new HttpParams().set('groupId', groupId.toString())
    };

    return this.http.get<PostModel[]>(url, options);
  }
}
