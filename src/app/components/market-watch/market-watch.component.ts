import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-market-watch',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatToolbar,
    MatIcon,
    MatAnchor,
    MatTooltip
  ],
  templateUrl: './market-watch.component.html',
  styleUrl: './market-watch.component.scss'
})
export class MarketWatchComponent {

}
