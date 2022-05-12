import {Component, Input} from "@angular/core";

import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent {
  @Input() comment: IComment;

  constructor() {
  }

}
