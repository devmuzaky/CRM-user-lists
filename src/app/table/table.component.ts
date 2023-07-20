import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../models/user";
import {Observable} from "rxjs";

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

}
