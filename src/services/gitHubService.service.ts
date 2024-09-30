import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {

  private baseUrl = 'https://api.github.com/users';

  private _http = inject(HttpClient);

  searchUsers(): Observable<any> {
    const url = `${this.baseUrl}`;
    return this._http.get(url);
  }

}
