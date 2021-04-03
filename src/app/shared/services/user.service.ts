import {HttpClient, HttpHeaders} from '@angular/common/http';
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

    const body = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      role: user.role
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {headers};

    return this.http.post<BaseResponse>(url, body, options);
  }

  signIn(user: UserModel): Observable<BaseResponse> {
    const url = environment.host + '/api/User/sign-in';

    const body = {
      email: user.email,
      password: user.password,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {headers};

    return this.http.post<BaseResponse>(url, body, options);
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

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem(environment.tokenKey)
    });
    const options = {headers};

    return this.http.get<UserModel>(url, options);
  }
}
