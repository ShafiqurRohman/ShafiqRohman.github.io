import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMe: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.aboutMe = this.dataService.getAboutMe();
  }

}
