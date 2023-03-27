import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `http://mongodb+srv://nietzshn:SCTQCvgViMZBnOy1@cluster0.fjmu5cz.mongodb.net/?retryWrites=true&w=majority/Customer2`;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl);
  }
}