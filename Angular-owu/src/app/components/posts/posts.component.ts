import {Component, OnInit} from "@angular/core";

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

  constructor(private jsonplaceholderService: JsonplaceholderService) {
  }

  ngOnInit(): void {
    this.jsonplaceholderService.getAll<IPost>(JphEnum.POSTS)
      .subscribe(posts => this.posts = posts);
  }

}
