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
      strings: ['', 'a Software Engineer', 'a Founder of Programmeraid','a DotNet Developer','a GO developer', 'a Angular developer', 'interested in IoT'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };

    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

}
