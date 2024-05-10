import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() length: any;
  @Input() pageSize: number = 50;
  @Output() onPaginat: EventEmitter<any> = new EventEmitter();
  pageEvent!: PageEvent;
  onChange(e: any) {
    this.pageEvent = e;
    console.log(this.pageEvent.pageIndex);
    this.onPaginat.emit(this.pageEvent.pageIndex + 1);
  }
}
