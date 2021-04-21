import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { environment } from 'src/environments/environment';
import { CommentModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SignalRCommentsService {

  constructor() { }

  private hubConnection: signalR.HubConnection

  private loginToken = localStorage.getItem(environment.tokenKey);

  public startConnection = () => {
    const url = environment.host + '/postcommenthub';

    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl(url, { accessTokenFactory: () => this.loginToken })
                            .build();

    this.hubConnection
        .start()
        .then(
          () => console.log("connection start"),
          error => console.log(error));
  }

  public sendComment = (comment: CommentModel) => {
    this.hubConnection.invoke("SendComment", comment);
  }

  public addCommentsListner = (callBack) => {
    this.hubConnection.on("Send", callBack)
  }
}
