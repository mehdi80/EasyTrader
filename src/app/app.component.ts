import {Component, OnInit} from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import {SearchComponent} from "./components/search/search.component";
import {NgClass, NgIf} from "@angular/common";
import {BtnHideShowVisibility} from "./services/btn-hide-show-visibility";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, SearchComponent, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Easy-Trader';

  isSearchVisible = false;

  constructor(private btnHideShowVisibility: BtnHideShowVisibility) {}

  ngOnInit() {
    this.btnHideShowVisibility.getVisibility('search').subscribe(visible => {
      this.isSearchVisible = visible;
    });
  }
}
