import {Component, OnInit} from "@angular/core";
import {IPost} from "../types/post.interface";
import {JsonplaceholderService} from "../common/services/jsonplaceholder.service";
import {JphEnum} from "../common/constants/jph.enum";

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
    this.jsonplaceholderService.getAll(JphEnum.POSTS)
      .subscribe(posts => this.posts = posts);
  }

}
