import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-table', templateUrl: './table.component.html', styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  users$: Observable<User[]> = new Observable<User[]>();

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    const page = 1;
    const perPage = 6;
    this.users$ = this.usersService.getUsers(page, perPage);
  }


  sendEmail(email: string) {
    window.open(`mailto:${email}?subject=Hey%20Widebot🎊&body=Hi%20Widebot%20I%20am%20Mohamed%20Zaky🙌`);
  }


  // This function is just for testing Pagination
  getDuplicatedUsers(users: User[]) {
    let duplicatedUsers: User[] = [];
    for (let i = 0; i < 4; i++) {
      duplicatedUsers = duplicatedUsers.concat(users);
    }
    return duplicatedUsers;
  }
}
