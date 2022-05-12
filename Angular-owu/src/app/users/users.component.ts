import {Component, OnInit} from "@angular/core";
import {IUser} from "../types/user.interface";
import {JsonplaceholderService} from "../common/services/jsonplaceholder.service";
import {JphEnum} from "../common/constants/jph.enum";

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
    this.jsonPlaceholderService.getAll(JphEnum.USERS)
      .subscribe(responce => {
        this.users = responce;
      });
  }

}
