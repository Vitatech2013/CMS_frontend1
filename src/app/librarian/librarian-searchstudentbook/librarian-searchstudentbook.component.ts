import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-searchstudentbook',
  templateUrl: './librarian-searchstudentbook.component.html',
  styleUrls: ['./librarian-searchstudentbook.component.scss']
})
export class LibrarianSearchstudentbookComponent implements OnInit {

  constructor(private route:ActivatedRoute , private librarianService:LibrarianService) { }

  ngOnInit(): void {
    let hallticket = this.route.snapshot.paramMap.get('hallticket');
    console.warn(hallticket);
    
  }

}
