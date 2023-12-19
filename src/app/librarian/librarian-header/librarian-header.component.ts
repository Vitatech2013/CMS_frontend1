import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarian-header',
  templateUrl: './librarian-header.component.html',
  styleUrls: ['./librarian-header.component.scss']
})
export class LibrarianHeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  public photo = JSON.parse(localStorage.getItem('librarian')!).photo
}
