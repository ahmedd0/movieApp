import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Output('nextPage') nextPage: any = new EventEmitter();
  @Output() prevPage: any = new EventEmitter();
  @Output() showPage: any = new EventEmitter();

  @Input() currentPages: any;
  constructor() {}

  ngOnInit(): void {}
  next() {
    this.nextPage.emit();
  }
  prev() {
    this.prevPage.emit();
  }
  handeShowPage(i: any) {
    this.showPage.emit({ pageNum: i });
  }
}
