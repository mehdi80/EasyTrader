import {Component, OnInit} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {SearchComponent} from "../search/search.component";
import {BtnHideShowVisibility} from "../../services/btn-hide-show-visibility";
import {BtnStyleDirective} from "../../directives/btn-styles.directive"
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgIf,
    SearchComponent,
    BtnStyleDirective
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  constructor(
    private btnHideShowVisibility: BtnHideShowVisibility,
  ) {}

  ngOnInit(): void {
    let scrollTopBtn: HTMLElement | null = document.getElementById('btn-scroll-up');
    let scrollDownBtn: HTMLElement | null = document.getElementById('btn-scroll-down');
    let scrollbar: HTMLElement | null = document.getElementById('scroll');

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        if (scrollbar) {
          scrollbar.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          console.error('Element with id "scroll" not found.');
        }
      });
    } else {
      console.error('Element with id "btn-scroll-up" not found.');
    }

    if (scrollDownBtn) {
      scrollDownBtn.addEventListener('click', () => {
        if (scrollbar) {
          scrollbar.scrollTo({
            top: scrollbar.scrollHeight,
            behavior: 'smooth'
          });
        } else {
          console.error('Element with id "scroll" not found.');
        }
      });
    } else {
      console.error('Element with id "btn-scroll-down" not found.');
    }
  }


  toggleSearch() {
    this.btnHideShowVisibility.toggleVisibility('search');
  }
}
