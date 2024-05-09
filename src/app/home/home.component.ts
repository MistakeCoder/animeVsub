import { Component } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent {
  data: any;

  constructor(
    public homeService: HomeService
  ) { }

  ngOnInit(): void {
    //this.getAnimes();
  }

  getAnimes() {
    this.homeService.getAnimeData().subscribe(res => {
      this.data = res;
    })
  }
}
