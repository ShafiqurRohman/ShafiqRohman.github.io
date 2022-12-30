import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: any;
  constructor(
    private dataService: DataService
  ) {
    this.dataService.getContact();
  }
  gotLinkid(): void {
    window.open("https://www.linkedin.com/in/shafiqur-rohman/", "_blank");
  }
}
