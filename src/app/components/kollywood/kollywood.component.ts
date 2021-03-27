import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-kollywood',
  templateUrl: './kollywood.component.html',
  styleUrls: ['./kollywood.component.css']
})
export class KollywoodComponent implements OnInit {

  data: any;

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getKollywoodUrl().pipe(
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
