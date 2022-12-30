import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educations: any;
  constructor(
    private dataService: DataService
  ) {
    this.educations = this.dataService.getEducations();
    console.log(this.educations);
  }
}
