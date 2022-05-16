import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";

import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent {
  @Input() post: IPost;

  constructor(private router: Router) {
  }

  handleClick($event: MouseEvent) {
    this.router.navigate(["comments"], {state: {postId: this.post.id}});
  }
}
