import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseResponse, FormModel} from '../models';
import {environment} from 'src/environments/environment';

@Injectable()
export class FormService {
  constructor(private http: HttpClient) {
  }

  updateForm(form: FormModel): Observable<BaseResponse> {
    const url = environment.host + '/api/Form/';
    const body = form;
    return this.http.put<BaseResponse>(url, body);
  }

  createForm(form: FormModel): Observable<FormModel> {
    const url = environment.host + '/api/Form/';
    const body = form;
    return this.http.post<FormModel>(url, body);
  }
}
