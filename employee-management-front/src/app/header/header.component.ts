import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { query } from '@angular/core/src/render3/query';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  queryParams: Params;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.queryParams = this.route.snapshot.queryParams;
    this.route.queryParams.subscribe((query: Params)=>
    {
      this.queryParams = query;
    })
  }

}
