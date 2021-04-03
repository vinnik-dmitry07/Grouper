import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseResponse, PostModel} from '../models';
import {environment} from 'src/environments/environment';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {
  }

  createPost(post: PostModel): Observable<BaseResponse> {
    const url = environment.host + '/api/Group/';

    const body = post;

    const options  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(environment.tokenKey)
      }),
    };

    return this.http.post<BaseResponse>(url, body, options);
  }

  loadPosts(groupId): Observable<PostModel[]> {
    const url = environment.host + '/api/Group/';

    const options  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(environment.tokenKey)
      }),
      params: new HttpParams().set('groupId', groupId)
    };

    return this.http.get<PostModel[]>(url, options);
  }
}
