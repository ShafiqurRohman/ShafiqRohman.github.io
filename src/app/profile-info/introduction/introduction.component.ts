import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  cvUrl: any;
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.cvUrl = this.dataService.cvurl;
    console.log(this.cvUrl);
    console.log("ami ekhane");
  }

}
