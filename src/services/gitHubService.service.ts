import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../interfaces/User';
import { BusquedaUser } from '../interfaces/BusquedaUser';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {

  private baseUrl = 'https://api.github.com/users';
  private baseBusquedaUrl = 'https://api.github.com/search/users'

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

  searchUsersParam (param: string): Observable<BusquedaUser> {
    const url =`${this.baseBusquedaUrl}?q=${param}&per_page=10`
    return this._http.get<BusquedaUser>(url);
  }

}
