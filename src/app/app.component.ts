import {Component, OnInit} from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import {SearchComponent} from "./components/search/search.component";
import {NgClass, NgIf} from "@angular/common";
import {BtnHideShowVisibility} from "./services/btn-hide-show-visibility";
import {MarketWatchComponent} from "./components/market-watch/market-watch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, SearchComponent, NgIf, NgClass, MarketWatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Easy-Trader';

  isSearchVisible = false;
  isMarketWatchVisible = true;

  constructor(private btnHideShowVisibility: BtnHideShowVisibility) {}

  ngOnInit() {
    this.btnHideShowVisibility.getVisibility('search').subscribe(visible => {
      this.isSearchVisible = visible;
    });
    this.btnHideShowVisibility.getVisibility('watcher').subscribe(visible => {
      this.isMarketWatchVisible = visible;
    });
  }
}
