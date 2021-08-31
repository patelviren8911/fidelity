import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private sidenav!: MatSidenav;
  constructor(private location: Location,) { }

  setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  openSidenav(): Promise<MatDrawerToggleResult> {
    return this.sidenav.open();
  }

  closeSidenav(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }

  toggleSidenav(): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle();
  }


  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }
}
