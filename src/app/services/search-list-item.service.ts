import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IsearchList} from "../model/isearch-list";

@Injectable({
  providedIn: 'root'
})
export class SearchListItemService {
  private SearchListItemUrl = 'assets/server/symbols-mock.json';

constructor(private http: HttpClient) { }

  getMockSearchListData(): Observable<IsearchList[]> {
    return this.http.get<IsearchList[]>(this.SearchListItemUrl);
  }
}

