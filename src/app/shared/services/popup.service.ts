import { Injectable } from '@angular/core';
import {map, Observable, take, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private popupVisible = false;

  constructor() { }

  getPopupVisibility(): Observable<boolean> {
    return timer(10000) // 10 seconds delay
      .pipe(
        take(1),
        map(() => {
          this.showPopup(); // Показываем попап после 10 секунд
          return this.popupVisible;
        })
      );
  }


  showPopup() {
    this.popupVisible = true;
  }

  hidePopup() {
    this.popupVisible = false;
  }
}
