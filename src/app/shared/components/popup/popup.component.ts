import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  @Output() watchClicked = new EventEmitter<void>();

  onWatchClick() {
    this.watchClicked.emit();
  }

  onCloseClick() {
    let popup = document.querySelector('.popup') as HTMLElement | null;
    if (popup) {
      popup.style.display = 'none';
    }
  }

}
