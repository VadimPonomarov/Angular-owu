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

  getAll(path: JphEnum): Observable<any> {
    return this.http.get(JphEnum.JPH_BASE + path);
  };
}
