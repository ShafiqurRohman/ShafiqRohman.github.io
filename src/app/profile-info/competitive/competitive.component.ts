import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-competitive',
  templateUrl: './competitive.component.html',
  styleUrls: ['./competitive.component.css']
})
export class CompetitiveComponent {
  config1: any;
  cpInfoOnline: any;
  cpInfoOnsite: any;
  
  constructor(
    private dataService: DataService
  ) {
    this.cpInfoOnline = this.dataService.getCompetitiveOnline();
    this.cpInfoOnsite = this.dataService.getCompetitiveOnSite();
    this.config1 = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.cpInfoOnsite.length
    };
  }
  pageChanged1(event: any) {
    this.config1.currentPage = event;
  }
}
