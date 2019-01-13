import {Injectable} from '@angular/core';
import {Contact} from '../models/contact';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

const BACKEND_URL = environment.apiUrl + '/contact';

// Communicates with the node.js server to do the respective CRUD on Contacts.

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  onAddContacts(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(BACKEND_URL, contact, httpOptions);
  }

  onViewContacts(): Observable<{ contacts: Contact[] }> {
    return this.http.get<{ contacts: Contact[] }>(BACKEND_URL);
  }

  getContact(id: string): Observable<{ contact: Contact }> {
    return this.http.get<{ contact: Contact }>(`${BACKEND_URL}/${id}`);
  }

  deleteContact(id: string): Observable<Contact> {
    return this.http.delete<Contact>(`${BACKEND_URL}/${id}`, httpOptions);
  }
}
