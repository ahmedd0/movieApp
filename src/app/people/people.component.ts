import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../people.service';
import { PaginationService } from './../pagination.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  data: any;
  currentPage: any = 1;
  totalPageNum: any;
  pagesArr: any;
  media: any;

  constructor(
    private _PeopleService: PeopleService,
    private _PaginationService: PaginationService
  ) {
    console.log('object');
  }

  ngOnInit(): void {
    this.getPeople();
  }
  getPeople() {
    this._PeopleService.getPeople(this.currentPage).subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
}
