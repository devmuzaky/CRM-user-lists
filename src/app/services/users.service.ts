import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/user";
import {map, Observable, tap} from "rxjs";
import {ApiResponse} from "../models/api-response";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public total: number = 0;
  public page: number = 0;
  public perPage: number = 0;

  constructor(private http: HttpClient) {
  }

  getUsers(page: number = 1, perPage: number = 6): Observable<User[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<ApiResponse>('https://reqres.in/api/users', {params})
      .pipe(
        tap(this.setPaginationData()),
        map((response: any) => response.data)
      );
  }

  private setPaginationData() {
    return (response: ApiResponse) => {
      this.total = response.total;
      this.page = response.page;
      this.perPage = response.per_page;
    };
  }
}
