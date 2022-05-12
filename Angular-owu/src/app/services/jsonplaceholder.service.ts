import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";
import {JphEnum} from "../constants/jph.enum";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) {
  }

  getAll<Type>(path: JphEnum): Observable<Type[]> {
    return this.http.get<Type[]>(JphEnum.JPH_BASE + path);
  };
}
