import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {

  private baseUrl = 'https://api.github.com/users';

  private _http = inject(HttpClient);

  searchUsers(): Observable<User[]> {
    const url = `${this.baseUrl}?per_page=10&page=1`;
    return this._http.get<User[]>(url);
  }

  searchUserById (id: string): Observable<User | undefined> {
    const url =`${this.baseUrl}/${id}`
    return this._http.get<User>(url)
      .pipe(
        catchError(error => of(undefined))
      )
  }

}
