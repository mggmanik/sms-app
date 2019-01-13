import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Message} from '../models/message';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

const BACKEND_URL = environment.apiUrl + '/message';

// Communicates with the node.js server to do the respective CRUD on Messages.

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Message[];

  constructor(private http: HttpClient) {
  }

  onSendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(BACKEND_URL, message, httpOptions);
  }

  onGetMessages(): Observable<{ messages: Message[] }> {
    return this.http.get<{ messages: Message[] }>(BACKEND_URL);
  }

  sortMessages(messages: Message[]) {

    messages.sort((message1, message2) => {
      if (message1.date > message2.date) {
        return -1;
      } else if (message1.date < message2.date) {
        return 1;
      } else {
        return 0;
      }
    });

    this.messages = messages;
    return this.messages;
  }

  deleteMessage(id: string): Observable<Message> {
    return this.http.delete<Message>(`${BACKEND_URL}/${id}`, httpOptions);
  }
}
