import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";
import {JphEnum} from "../constants/jph.enum";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/post.interface";

@Injectable({
  providedIn: "root"
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) {
  }

  getAll<Type>(path: JphEnum): Observable<Type[]> {
    return this.http.get<Type[]>(JphEnum.JPH_BASE + path);
  };

  getAllPostsForUserId(userId: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(JphEnum.JPH_BASE + JphEnum.USERS + "/" + userId.toString() + JphEnum.POSTS);
  };
}
