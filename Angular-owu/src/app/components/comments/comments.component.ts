import {Component, OnInit} from "@angular/core";

import {IComment} from "../../interfaces/comment.interface";
import {JsonplaceholderService} from "../../services/jsonplaceholder.service";
import {JphEnum} from "../../constants/jph.enum";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"]
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private jsonplaceholderService: JsonplaceholderService) {
  }

  ngOnInit(): void {
    this.jsonplaceholderService.getAll<IComment>(JphEnum.COMMENTS)
      .subscribe(comments => this.comments = comments);
  }

}
