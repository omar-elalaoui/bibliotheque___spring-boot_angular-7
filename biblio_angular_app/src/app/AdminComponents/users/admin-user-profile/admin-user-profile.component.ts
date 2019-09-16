import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-admin-user-profile',
  templateUrl: './admin-user-profile.component.html',
  styleUrls: ['./admin-user-profile.component.scss']
})
export class AdminUserProfileComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const id= this.route.snapshot.params["id"];
    this.loadUser(id);
  }

  loadUser(username: string){
    this.userService.getUser(username).subscribe(data => {this.user= data;})
  }

}
