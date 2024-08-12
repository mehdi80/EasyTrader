import { Component } from '@angular/core';
import {SearchBoxComponent} from "./search-box/search-box.component";
import {SearchListComponent} from "./search-list/search-list.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchBoxComponent,
    SearchListComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
