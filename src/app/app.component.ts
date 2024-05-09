import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent {
  title = 'animeVsub';

  constructor(
    public appService: AppService
  ) {

  }

  ngOnInit(): void {
    this.appService.clientRequestAuthentication().subscribe(res => {
      console.log(res);
    })

  }
}
