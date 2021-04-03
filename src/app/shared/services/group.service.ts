import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GroupModel, BaseResponse} from '../models';
import {environment} from 'src/environments/environment';

@Injectable()
export class GroupService {
  constructor(private http: HttpClient) {
  }

  createGroup(group: GroupModel): Observable<BaseResponse> {
    const url = environment.host + '/api/Group/';

    const body = group;

    const options  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(environment.tokenKey)
      }),
    };

    return this.http.post<BaseResponse>(url, body, options);
  }

  loadGroups(userId): Observable<GroupModel[]> {
    const url = environment.host + '/api/Group/';

    const options  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(environment.tokenKey)
      }),
      params: new HttpParams().set('userId', userId)
    };

    return this.http.get<GroupModel[]>(url, options);
  }
}
