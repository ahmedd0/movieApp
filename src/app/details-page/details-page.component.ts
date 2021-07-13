import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from './../trending.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  id: any;
  mediaDetails: any;
  mediaType: any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _TrendingService: TrendingService
  ) {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this.mediaType = this._ActivatedRoute.snapshot.params.mediaType;
    this._TrendingService
      .getMediaDetials(this.mediaType, this.id)
      .subscribe((response) => {
        console.log(response);
        this.mediaDetails = response;
      });
  }

  ngOnInit(): void {}
}
