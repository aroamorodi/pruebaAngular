import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {

  private baseUrl = 'https://api.github.com/search/users';

  private _http = inject(HttpClient);

  searchUsers(query: string): Observable<any> {
    const url = `${this.baseUrl}?q=${query}`;
    return this._http.get(url);
  }

}
