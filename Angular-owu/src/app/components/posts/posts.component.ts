import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {IPost} from "../../interfaces/post.interface";
import {JsonplaceholderService} from "../../services/jsonplaceholder.service";
import {JphEnum} from "../../constants/jph.enum";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  userId: number | null;

  constructor(private jsonplaceholderService: JsonplaceholderService, private router: Router) {
  }

  ngOnInit(): void {
    const userId = history.state["userId"];
    if (userId) {
      this.userId = userId;
      this.jsonplaceholderService.getAllPostsForUserId(userId)
        .subscribe(posts => this.posts = posts);
      return;
    }
    this.userId = null;
    this.jsonplaceholderService.getAll<IPost>(JphEnum.POSTS)
      .subscribe(posts => this.posts = posts);
  }

}
