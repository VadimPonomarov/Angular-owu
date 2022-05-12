import {Component, Input} from "@angular/core";

import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent {
  @Input("user") user: IUser;

  constructor() {
  }
}
