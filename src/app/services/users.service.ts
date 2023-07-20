import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/user";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(page: number = 1, perPage: number = 6): Observable<User[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<User[]>('https://reqres.in/api/users', {params})
      .pipe(map((response: any) => response.data));
  }

}
