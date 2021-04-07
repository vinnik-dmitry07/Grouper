import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseResponse, GroupModel} from '../models';
import {environment} from 'src/environments/environment';

@Injectable()
export class GroupService {
  constructor(private http: HttpClient) {
  }

  createGroup(group: GroupModel): Observable<GroupModel> {
    const url = environment.host + '/api/Group/';
    const body = group;
    return this.http.post<any>(url, body);
  }

  joinGroup(identificator: string): Observable<GroupModel> {
    const url = environment.host + '/api/Group/add-with-identificator/';
    const body = JSON.stringify(identificator);
    return this.http.post<GroupModel>(url, body);
  }

  loadGroup(groupId: number): Observable<GroupModel> {
    const url = environment.host + '/api/Group/' + groupId;
    return this.http.get<GroupModel>(url);
  }

  loadGroups(userId: string): Observable<GroupModel[]> {
    const url = environment.host + '/api/Group/';
    const options = {params: new HttpParams().set('userId', userId)};
    return this.http.get<GroupModel[]>(url, options);
  }

  deleteGroup(groupId: number): Observable<BaseResponse> {
    const url = environment.host + '/api/Group/' + groupId.toString();
    return this.http.delete<BaseResponse>(url);
  }

  updateGroup(group: GroupModel): Observable<BaseResponse> {
    const url = environment.host + '/api/Group/';
    const body = group;
    return this.http.put<BaseResponse>(url, body);
  }
}
