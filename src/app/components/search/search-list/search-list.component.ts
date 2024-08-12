import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgFor} from "@angular/common";
import {IsearchList} from "../../../model/isearch-list";
import {SearchListItemService} from "../../../services/search-list-item.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})


export class SearchListComponent implements OnInit{

  searchList:IsearchList[] = [];

  constructor(private searchListItem: SearchListItemService) {}

  ngOnInit() {
    this.searchListItem.getMockSearchListData().subscribe(data => {
      this.searchList = data;
    });
  }
}
