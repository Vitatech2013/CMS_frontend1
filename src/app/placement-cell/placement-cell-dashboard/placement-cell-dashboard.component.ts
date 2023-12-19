import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placement-cell-dashboard',
  templateUrl: './placement-cell-dashboard.component.html',
  styleUrls: ['./placement-cell-dashboard.component.scss']
})
export class PlacementCellDashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {}
  logout(){
    localStorage.removeItem('placement')
    this.router.navigate(['/placement-login'])

  }
}
