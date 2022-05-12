import {Component, OnInit} from "@angular/core";

import {IUser} from "../../interfaces/user.interface";
import {JsonplaceholderService} from "../../services/jsonplaceholder.service";
import {JphEnum} from "../../constants/jph.enum";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private jsonPlaceholderService: JsonplaceholderService) {

  }

  ngOnInit(): void {
    this.jsonPlaceholderService.getAll<IUser>(JphEnum.USERS)
      .subscribe(users => {
        this.users = users;
      });
  }

}
