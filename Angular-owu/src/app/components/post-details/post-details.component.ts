import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"]
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => this.post = history.state["data"]);
  }

}
