import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { SharedModule } from './../shared/shared.module';
import { TvShowsComponent } from './tv-shows.component';
@NgModule({
  declarations: [TvShowsComponent],
  imports: [CommonModule, TvShowsRoutingModule, SharedModule],
})
export class TvShowsModule {}
