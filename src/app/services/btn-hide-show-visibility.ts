import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BtnHideShowVisibility {
  private visibilitySubjects: { [key: string]: BehaviorSubject<boolean> } = {};

  constructor() {
    this.visibilitySubjects['watcher'] = new BehaviorSubject<boolean>(true)
  }

  // متد برای ایجاد یک BehaviorSubject جدید برای هر کلید
  private getVisibilitySubject(key: string): BehaviorSubject<boolean> {
    if (!this.visibilitySubjects[key]) {
      this.visibilitySubjects[key] = new BehaviorSubject<boolean>(false);
    }
    return this.visibilitySubjects[key];
  }

  // متد برای تغییر وضعیت نمایش
  toggleVisibility(key: string) {
    const subject = this.getVisibilitySubject(key);
    subject.next(!subject.value);
  }

  // متد برای دریافت Observable وضعیت نمایش
  getVisibility(key: string) {
    return this.getVisibilitySubject(key).asObservable();
  }
}
