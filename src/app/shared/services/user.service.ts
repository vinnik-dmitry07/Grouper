import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {BaseResponse} from '../models/base-response';
import {UserModel} from '../models/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  signUp(user: UserModel): Observable<BaseResponse> {
    const url = environment.user.signUp;

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
}
