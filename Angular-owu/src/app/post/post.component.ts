import {Component, Input} from "@angular/core";
import {IPost} from "../types/post.interface";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent {
  @Input() post: IPost;

  constructor() {
  }
}
