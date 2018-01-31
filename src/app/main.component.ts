import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  episodes
  title = "Season 1"
  season = 1
  orderBy = "epNum"
  
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this.getData()
  }

  // Data is passed into Angular components as Rx observables
  // When observables are subscribed to, changes in state will update the client
  getData() {
    this._http.get(`---address to private API---`)
    .subscribe(data => {
      if (data) this.episodes = data;
    })
  }

  // if user clicks a label twice, it will reverse the order
  // otherwise it will re-sort the data
  setOrder(order) {
    if (this.orderBy === order) this.orderBy = order + 'Reverse'
    else this.orderBy = order
  }

}
