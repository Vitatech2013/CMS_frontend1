import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-librarian-navbar',
  templateUrl: './librarian-navbar.component.html',
  styleUrls: ['./librarian-navbar.component.scss']
})
export class LibrarianNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
