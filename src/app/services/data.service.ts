import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  cvurl = "https://drive.google.com/file/d/1AVMFYDzzvNJoc2i4nDL33NIB9s3eKzhY/view"

  getResume(){
    return this.cvurl;
  }
  about = "I’m a competitive programmer and co‑founder of Programmer Aid, a programming content‑sharing and problem solve tracking website. Although I am Looking to establish a career in Information Technology, I wish to work in a growth‑oriented company and contribute to the organization’s development while upgrading my skill set knowledge. I have solved 1200+ problems in various online judging platforms. In addition, I attended the national competitive programming contest, and Hackathon, and learned a lot about algorithms coding and how to work with a team to solve problems."
  getAboutMe() {
    return this.about;
  }
}
