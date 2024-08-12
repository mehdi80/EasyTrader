import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

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
}
