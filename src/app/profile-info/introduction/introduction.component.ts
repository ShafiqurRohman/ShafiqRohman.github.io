import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
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

    var options = {
      strings: ['', 'a Competitive programmer', 'interested in Software Development', 'a Co-founder of Programmeraid', 'interested in Angular development', 'interested in Dotnet development', 'interested in Full Stack development'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };

    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

}
