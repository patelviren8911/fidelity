import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  @ViewChild('sidenav', { static: true })
  public sidenav!: MatSidenav;
  subscription!: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    public utilService: UtilService,
  ) { }

  ngOnInit(): void {
    this.utilService.setSidenav(this.sidenav);
  }

}
