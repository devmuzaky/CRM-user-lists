import {Component, OnInit, TemplateRef} from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../models/user";
import {first, last, Observable} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  users$: Observable<User[]> = new Observable<User[]>();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }


  sendEmail(email: string) {
    window.open(`mailto:${email}?subject= &body=Hi%20Widebot%20I%20am%20Mohamed%20Zaky`);
  }

  getDupicatedUsers(users: User[]) {
    let dupicatedUsers: User[] = [];
    for (let i = 0; i < 4; i++) {
      dupicatedUsers = dupicatedUsers.concat(users);

    }
    return dupicatedUsers;
  }
}
