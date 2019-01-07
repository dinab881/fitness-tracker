import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Observable, Subscription} from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit/*, OnDestroy*/ {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  /*authSubscription: Subscription;*/

  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>

  ) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
   /* this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });*/
  }

  onClose(){
    this.closeSidenav.emit();
  }

  onLogout(){
    this.onClose();
    this.authService.logout();
  }

  /*ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }*/

}
