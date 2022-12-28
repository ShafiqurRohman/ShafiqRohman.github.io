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

  Frameworks: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 12+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'ASP.NET WEB API',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'EF CORE',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'MY SQL',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Oracle SQL',
      'progress': '75%'
    }
  ];

  Language: any = [
    {
      'id': '1',
      'skill': 'C++',
      'progress': '95%'
    },
    {
      'id': '2',
      'skill': 'C#',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'TypeScript',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Python',
      'progress': '50%'
    },
    {
      'id': '5',
      'skill': 'Java',
      'progress': '50%'
    }
  ];

  TOOLs: any = [
    {
      'id': '1',
      'skill': 'GITHUB, GITLAB',
      'progress': '95%'
    },
    {
      'id': '2',
      'skill': 'Microsoft Windows',
      'progress': '90%'
    },
    {
      'id': '3',
      'skill': 'Linux',
      'progress': '50%'
    },
    {
      'id': '4',
      'skill': 'Trello',
      'progress': '95%'
    },
    {
      'id': '5',
      'skill': 'Docker',
      'progress': '50%'
    }
  ];
  
  GetLanguage(): Observable<any> {
    return this.Language;
  }
  GetFrameworks(): Observable<any> {
    return this.Frameworks;
  }
  GetTools(): Observable<any> {
    return this.TOOLs;
  }
}
