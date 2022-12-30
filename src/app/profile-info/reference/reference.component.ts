import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent {
  references: any;
  constructor(
    private dataService: DataService
  ) {
    this.references = this.dataService.getReferences();
  }

}
