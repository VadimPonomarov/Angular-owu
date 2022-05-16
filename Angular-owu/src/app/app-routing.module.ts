import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./components/layouts/main-layout/main-layout.component";
import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {PostsComponent} from "./components/posts/posts.component";
import {CommentsComponent} from "./components/comments/comments.component";

const routes: Routes = [
    {
      path: "", component: MainLayoutComponent, children: [
        {
          path: "", component: UsersComponent, children: [
            {path: "user/:id", component: UserDetailsComponent}
          ]
        },
        {path: "posts", component: PostsComponent},
        {path: "comments", component: CommentsComponent}
      ],

    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
