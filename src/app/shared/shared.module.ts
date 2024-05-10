import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './../pagination/pagination.component';
import { LoaderComponent } from './../loader/loader.component';
import { MediaItemComponent } from './../media-item/media-item.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [PaginationComponent, LoaderComponent, MediaItemComponent],
  imports: [CommonModule, MatPaginatorModule],
  exports: [PaginationComponent, LoaderComponent, MediaItemComponent],
})
export class SharedModule {}
