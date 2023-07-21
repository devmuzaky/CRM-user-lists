import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-table', templateUrl: './table.component.html', styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  users$: Observable<User[]> = new Observable<User[]>();

  constructor(public usersService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params) => {
        let page = 1;
        let perPage = 6;

        if (params.has('page')) page = Number(params.get('page'));
        if (params.has('perPage')) perPage = Number(params.get('perPage'));

        this.users$ = this.usersService.getUsers(page, perPage);
      });
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
