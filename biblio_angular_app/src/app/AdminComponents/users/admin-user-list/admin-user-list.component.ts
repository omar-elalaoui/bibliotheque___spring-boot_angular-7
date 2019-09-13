import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {AlertifyService} from '../../../services/alertify.service';
import {User} from '../../../models/user';
import {Student} from '../../../models/student';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      data =>{this.users= data; this.users.shift();},
      error => {this.alertify.error(error)}
    )
  }

  toggleblock(user: User){
    user.actived= !user.actived;
    this.userService.toggleBlockUser(user).subscribe(
      data => {}, error => {}
    )
  }

}
