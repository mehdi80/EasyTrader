 import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
 import {Subscription} from "rxjs";
 import {BtnHideShowVisibility} from "../services/btn-hide-show-visibility";

 @Directive({
   selector: '[appBtnStyles]',
   standalone: true
 })
// export class BtnStyleDirective implements OnInit {
//   isSearchVisible = false;
//   private subscription!: Subscription;
//   constructor(private el: ElementRef, private visibilityService: BtnHideShowVisibility) {}
//
//   ngOnInit() {
//     this.subscription = this.visibilityService.getVisibility('search').subscribe(visible => {
//       this.isSearchVisible = visible;
//       this.changeStyle();
//     });
//   }
//
//   ngOnDestroy() {
//     // از بین بردن اشتراک برای جلوگیری از نشت حافظه
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }
//
//   //متد برای اعمال استایل
//   changeStyle(){
//     const element = this.el.nativeElement; // متغیر محلی برای عنصر
//     if (this.isSearchVisible) {
//       element.classList.add('menu-item-active'); // افزودن کلاس active
//       element.classList.remove('menu-item'); // حذف کلاس inactive
//      // element.style.pointerEvents = 'none'; // غیرفعال کردن hover
//     } else {
//       element.classList.add('menu-item'); // افزودن کلاس inactive
//       element.classList.remove('menu-item-active'); // حذف کلاس active
//     }
//   }
// }
//

export class BtnStyleDirective implements OnInit, OnDestroy {
  @Input('appBtnStyles') buttonId!: string;
  isVisible = false;
  private subscription!: Subscription;

  constructor(private el: ElementRef, private visibilityService: BtnHideShowVisibility) {}

  ngOnInit() {
    this.subscription = this.visibilityService.getVisibility(this.buttonId).subscribe(visible => {
      this.isVisible = visible;
      this.changeStyle();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  changeStyle() {
    const element = this.el.nativeElement;
    if (this.isVisible) {
      element.classList.add('menu-item-active');
      element.classList.remove('menu-item');
    } else {
      element.classList.add('menu-item');
      element.classList.remove('menu-item-active');
    }
  }
}
