import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {BaseResponse, UserModel} from '../models';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  signUp(user: UserModel): Observable<BaseResponse> {
    const url = environment.host + '/api/User/sign-up';
    const body = user;
    return this.http.post<BaseResponse>(url, body);
  }

  signIn(user: UserModel): Observable<BaseResponse> {
    const url = environment.host + '/api/User/sign-in';
    const body = user;
    return this.http.post<BaseResponse>(url, body);
  }

  googleLogin(){
    const callbackUrl = `http://${window.location.hostname}:${window.location.port}/groups`;
    const url = environment.host + '/api/User/google-login?callbackUrl=' + callbackUrl;

    window.location.href = url;
  }

  removeToken(): void {
    localStorage.removeItem(environment.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(environment.tokenKey, token);
  }

  hasToken(): boolean {
    return localStorage.getItem(environment.tokenKey) != null;
  }

  loadUser(): Observable<UserModel> {
    const url = environment.host + '/api/User/user-info';
    return this.http.get<UserModel>(url);
  }

  leaveGroup(groupId: number): Observable<BaseResponse> {
    const url = environment.host + '/api/User/leave-group';
    const body = null;
    const options = {params: new HttpParams().set('groupId', groupId.toString())};
    return this.http.post<BaseResponse>(url, body, options);
  }
}
