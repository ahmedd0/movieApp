import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { SharedModule } from './../shared/shared.module';
import { PeopleComponent } from './people.component';

@NgModule({
  declarations: [PeopleComponent],
  imports: [CommonModule, PeopleRoutingModule,SharedModule],
})




export class PeopleModule {}
