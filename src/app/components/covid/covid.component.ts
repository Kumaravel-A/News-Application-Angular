import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  data: any;

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getCovidUrl().subscribe(
      (result: any) => {
        console.log(result);
        this.data = result.Countries[76];
    });
  }
}
