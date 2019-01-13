import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Message} from '../models/message';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

const BACKEND_URL = environment.apiUrl + '/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {
  }

  onSendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(BACKEND_URL, message, httpOptions);
  }
}
