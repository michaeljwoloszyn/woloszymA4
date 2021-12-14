import { Component, Input } from '@angular/core';
import { PassAlongService } from './pass-along.service'
import { Woloszym } from './woloszym';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'woloszymA4';
}

export class HeaderComponent {
  assignment!: Woloszym;
  name!: Woloszym;

  constructor(private passService: PassAlongService) { }

  getWoloszymData() {
    this.assignment = this.passService.getWoloszymData();
    this.name = this.passService.getWoloszymData();
  }
}

export class FooterComponent {
  name!: Woloszym;
  studentNum!: Woloszym;
  loginName!: Woloszym;
  campus!: Woloszym;

  constructor(private passService: PassAlongService) { }

  getWoloszymData() {
    this.name = this.passService.getWoloszymData();
    this.studentNum = this.passService.getWoloszymData();
    this.loginName = this.passService.getWoloszymData();
    this.campus = this.passService.getWoloszymData();
  }
}
