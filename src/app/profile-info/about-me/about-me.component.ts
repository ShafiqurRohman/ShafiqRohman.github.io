import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent{

  aboutMe: any;
  basicInfo: any;

  constructor(
    private dataService: DataService
  ) {
    this.aboutMe = this.dataService.getAboutMe();
    this.basicInfo = this.dataService.getBasicInfo();
  }

}
