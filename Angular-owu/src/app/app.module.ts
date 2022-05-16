import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {UsersComponent} from "./components/users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from "./components/user/user.component";
import {NgbAccordionModule, NgbModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {JsonplaceholderService} from "./services/jsonplaceholder.service";
import {PostsComponent} from "./components/posts/posts.component";
import {PostComponent} from "./components/post/post.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentComponent} from "./components/comment/comment.component";
import {MainLayoutComponent} from "./components/layouts/main-layout/main-layout.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    MainLayoutComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbModule
  ],
  providers: [JsonplaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
