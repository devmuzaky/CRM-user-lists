import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../models/user";
import {BehaviorSubject, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-table', templateUrl: './table.component.html', styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private usersSubject$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public users$: Observable<User[]> = this.usersSubject$.asObservable();

  constructor(public usersService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params) => {
        let page = 1;
        let perPage = 6;

        if (params.has('page')) page = Number(params.get('page'));
        if (params.has('perPage')) perPage = Number(params.get('perPage'));

        this.usersService.getUsers(page, perPage).subscribe(
          (users) => {
            this.usersSubject$.next(users);
          }
        )
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

  lazyLoadUsers($event: LazyLoadEvent) {
    console.log("in lazyLoadUsers")
    if ($event.first == undefined) return;
    if ($event.rows  == undefined) return;

    let page = $event.first / $event.rows + 1;
    let perPage = $event.rows;
    console.log(page, perPage);
    this.usersService.getUsers(page, perPage).subscribe(
      (users) => {
        this.usersSubject$.next(users);
      });
  }
}
