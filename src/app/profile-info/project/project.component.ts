import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  config: any;
  projects: any = [];

  constructor(
    private dataservice: DataService
  ) {
    this.projects = this.dataservice.getProjects();
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }
}
