import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  workexp: any

  constructor(
    private dataService: DataService
  ) {
    this.workexp = this.dataService.getExprience();
  }

}
