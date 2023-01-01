import { Component} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  frameworks: any
  languages: any
  tools: any

  constructor(
    private dataService: DataService
  ) {
    this.frameworks = this.dataService.GetFrameworks();
    this.languages = this.dataService.GetLanguage();
    this.tools = this.dataService.GetTools();
  }
}
