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

  getResume() {
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

  projects: any = [
    {
      id: 1,
      title: 'Programmer Aid',
      desc: 'I am a Co-Founder of programmer aid and here I also work as a software developer and project planner and designer. This project helps me to learn a lot and It is a great experience for me to work with Alamin Hossain who is also Founder.',
      livedemo: 'https://programmeraid.com/',
      githurl: 'https://gitlab.com/alamin_bs23/programmer_aid',
      imgUrl: 'assets/images/programmeraid.JPG',
      tech: 'Angular 12 , ASP.NET 5.0, MsSQL Server, Bootstrap 5, Typescript, C#'
    },

    {
      id: 2,
      title: 'Hall Digitalization',
      desc: 'I work as a software developer. I designed the project and implemented features with help of Angular and Dotnet 5 for using on the back end to create the API and JWT authentication. This project is used to manage Hall’s students and meals. We can handle multiple halls.',
      livedemo: 'https://smrh.just.edu.bd/',
      githurl: 'https://gitlab.com/alamin_bs23/halldigitilization',
      imgUrl: 'assets/images/hall.JPG',
      tech: 'Angular 12 , ASP.NET 5.0, MsSQL Server, Bootstrap 5, Typescript, C#'
    },

    {
      id: 3,
      title: 'Personal Portfolio',
      desc: 'I create the project in Angular 15, leatest version of Angular, and create structure my own way that help to create a dynamic and reusalble website for everyone.Furthermore, I also follow Mehul Kothari,s UI in my Portpolio for more resposive and attractive look.',
      livedemo: 'http://www.shafiqur.me',
      githurl: 'https://github.com/ShafiqurRohman/ShafiqRohman.github.io',
      imgUrl: 'assets/images/personal.JPG',
      tech: 'Angular 15, Bootstrap, TypeScript, CSS'
    },

    {
      id: 4,
      title: 'Java MCQ Quiz App',
      desc: 'I have designed the project feature and implemented all required features.Java AWT is used in the project. In addition, this project is used for the MCQ test online.',
      livedemo: '',
      githurl: 'https://github.com/ShafiqurRohman/Java-MCQ-Test',
      imgUrl: 'assets/images/javap.JPG',
      tech: 'Java, Java AWT'
    }

  ]

  getProjects(): Observable<any> {
    return this.projects;
  }

  contact: any = [
  ]

  getContact(): Observable<any> {
    return this.contact;
  }

  exprienceData: any = [
    {
      id: 1,
      company: 'Programmer Aid',
      location: 'Dhaka, Bangladesh',
      timeline: 'September 2021 to Present',
      role: 'Software Developer',
      work: [
        'Worked as a full stack developer .Responsible for handling the UI in Angular and Managing the api calls in Dotnet 5.',
        'Worked as a project planner and designer. I designed the project and implemented features with help of Angular and Dotnet 5 for using on the back end to create the API and JWT authentication.',
        'Worked as a co-founder. I managed the project'
      ]

    },
    {
      id: 2,
      company: 'JUST Hall Digitalization(Freelance)',
      location: 'Dhaka, Bangladesh',
      timeline: 'Feb 2021 to September 2021',
      role: 'Software Developer',
      work: [
        'Worked as a full stack developer .Responsible for handling the UI in Angular and Managing the api calls in Dotnet 5.',
        'Worked as a project planner and designer. I designed the project and implemented features with help of Angular and Dotnet 5 for using on the back end to create the API and JWT authentication.',

      ]
    },
    {
      id: 3,
      company: 'UITS Programmers Hub',
      location: 'UITS, Dhaka, Bangladesh',
      timeline: 'Jan 2020 ‐ Present',
      role: 'Senior Executive and Mentor',
      work: [
        'Worked as a problem setter Intra‐university programming contests.',
        'Worked as a programming instructor and mentor..',
        'Arranging Intra ‐ university programming contests.'

      ]
    }
  ]

  getExprience(): Observable<any> {
    return this.exprienceData;
  }

  references: any = [
   /* {
      personImg: "assets/images/shayokh.jpg",
      personFullname: 'Mr. Md. Al Shayokh',
      personPosition: "Assistant Professor & Head",
      personCompany: 'Department of IT,UITS',
      mail: 'al.shayokh@uits.edu.bd',
      message: "Shafiq is a student in my department and I teach him in many courses. Shafiq is an excellent working student with high knowledge in education, programming problem solving and software development, he is always keen to move forward without ever being afraid to use new technologies. He does not hesitate to help his friends whenever he can. He manages to solve problems quickly and efficiently with typical optimism.",
    },
    */
    {
      personImg: "assets/images/istiaq.jpg",
      personFullname: 'Md. Ishtiaq Iqbal',
      personPosition: "Lecturer and Course Coordinator",
      personCompany: 'Department of IT,UITS',
      mail: 'Ishtiaq.Iqbal@uits.edu.bd',
      message: "Shafiq is a student in my department and I teach him in many courses. Shafiq is an excellent working student with high knowledge in education, programming problem solving and software development, he is always keen to move forward without ever being afraid to use new technologies. He does not hesitate to help his friends whenever he can. He manages to solve problems quickly and efficiently with typical optimism.",
    },
    
    {
      personImg: "assets/images/alamin.png",
      personFullname: 'Alamin Hossain',
      personPosition: "Software Engineer",
      personCompany: 'TigerIT',
      mail: 'alamin.cse.justian@gmail.com',
      message: "I worked for two years with Shafiq at ProgrammerAid and JUST Hall Project. Shafiq is a very good working partner with high knowledge in backend and frontend development, he is always keen to move forward without ever being afraid to use new technologies. He does not hesitate to help his colleagues whenever he can. He manages to solve problems quickly and efficiently with typical optimism.",
    }
  ]

  getReferences(): Observable<any> {
    return this.references;
  }

  educations: any = [
    {
      id: 1,
      year: '2019 - 2023',
      degreeType: "Bachelor's Degree",
      degreeName: 'Information Technology',
      institution: 'University of Information Technology and Sciences (UITS)',
      keyPoints: [
        'Maintained above 3.80 cgpa in every semester of university academic.',
        'Attending Intra‐university programming contests.',
        'Attending Intra‐university hackathon contests.',
      ]
    },
    {
      id: 2,
      year: '2016 - 2018',
      degreeType: "Higher Secondary",
      degreeName: 'Higher Secondary Certificate (HSC)',
      institution: 'Gulshan Model Uccha Maddhyamik Biddalya',
      keyPoints: [
        'The High School was mainly focus on the bases of science, mathematics, and Chemistry',
        'There was also a good base on physics, mathematics',
        'The school was also focus on the English language and literature',
      ]
    },
    {
      id: 3,
      year: '2014 - 2015',
      degreeType: "Secondary School",
      degreeName: 'Secondary School Certificate (SSC)',
      institution: 'Gobindapur High School',
      keyPoints: [
        'Become first position in the school in SSC examination',
        'The High School was mainly focus on the bases of science,Physics, Mathematics, and Chemistry',
        'The school was also focus on the English language and literature',
      ]
    },
  ]
  getEducations(): Observable<any> {
    return this.educations;
  }
}
