import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MarketWatchToolbarComponent} from "./market-watch-toolbar/market-watch-toolbar.component";
import {MarketWatchTableComponent} from "./market-watch-table/market-watch-table.component";

@Component({
  selector: 'app-market-watch',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatToolbar,
    MatIcon,
    MatAnchor,
    MatTooltip,
    MarketWatchToolbarComponent,
    MarketWatchTableComponent
  ],
  templateUrl: './market-watch.component.html',
  styleUrl: './market-watch.component.scss'
})
export class MarketWatchComponent {

}
