import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopupService} from "../../shared/services/popup.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  title = 'cw_23';

  popupVisible = false;
  private subscription: Subscription | null = null;

  constructor(private popupService: PopupService, private router:Router) {
  }

  onWatchClicked() {
    this.router.navigate(['/catalog']);
  }

  ngOnInit() {
    this.subscription = this.popupService.getPopupVisibility().subscribe((isVisible) => {
      if (isVisible) {
        this.popupVisible = true;
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
