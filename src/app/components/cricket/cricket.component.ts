import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {

  data: any;

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getCricketUrl().pipe(
      map((res: any) => res.articles.map((items: any) => {
        return {
            title : items.title,
            description : items.description,
            url : items.url,
            image : items.image
        };
      }))
    ).subscribe((list: any) => {
      this.data = list;
    });
  }

}
