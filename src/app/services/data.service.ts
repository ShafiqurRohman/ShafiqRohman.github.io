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

  cvurl = "https://drive.google.com/file/d/1kPbmpccDDWQ3GB1pgSXj8moGEp4opP0z/view"

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
      githurl: '',
      imgUrl: 'assets/images/programmeraid.JPG',
      tech: 'Angular 12 , ASP.NET 5.0, MsSQL Server, Bootstrap 5, Typescript, C#'
    },

    {
      id: 2,
      title: 'Hall Digitalization',
      desc: 'I work as a software developer. I designed the project and implemented features with help of Angular and Dotnet 5 for using on the back end to create the API and JWT authentication. This project is used to manage Hall’s students and meals. We can handle multiple halls.',
      livedemo: 'https://smrh.just.edu.bd/',
      githurl: '',
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

  basicInfo: any ={
      age: '23 YEARS OLD',
      mail: 'shafiqur.me@gmail.com',
      phone: '+880 1832908662',
      address: 'VATARA,DHAKA-1212, BANGLADESH',
      language: 'English, Bengali',
  }

  getBasicInfo(): Observable<any> {
    return this.basicInfo;
  }

  contactInfo: any = {
  }
    

  getContact(): Observable<any> {
    return this.contactInfo;
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
    {
      personImg: "assets/images/shayokh.jpg",
      personFullname: 'Mr. Md. Al Shayokh',
      personPosition: "Assistant Professor & Head",
      personCompany: 'Department of IT,UITS',
      mail: 'al.shayokh@uits.edu.bd',
      message: "Shafiq is a student in my department and I teach him in many courses. Shafiq is an excellent working student with high knowledge in education, programming problem solving and software development, he is always keep to move forward without ever being afraid to use new technologies. He does not hesitate to help his friends whenever he can. He manages to solve problems quickly and efficiently with typical optimism.",
    },
    
    {
      personImg: "assets/images/istiaq.jpg",
      personFullname: 'Md. Ishtiaq Iqbal',
      personPosition: "Lecturer and Course Coordinator",
      personCompany: 'Department of IT,UITS',
      mail: 'Ishtiaq.Iqbal@uits.edu.bd',
      message: "Shafiq is a student in my department and I teach him in many courses. Shafiq is an excellent working student with high knowledge in education, programming problem solving and software development, he is always keep to move forward without ever being afraid to use new technologies. He does not hesitate to help his friends whenever he can. He manages to solve problems quickly and efficiently with typical optimism.",
    },
    
    {
      personImg: "assets/images/alamin.png",
      personFullname: 'Alamin Hossain',
      personPosition: "Software Engineer",
      personCompany: 'Tiger IT Bangladesh Limited',
      mail: 'alamin.cse.justian@gmail.com',
      message: "I worked for two years with Shafiq at ProgrammerAid and JUST Hall Project. Shafiq is a very good working partner with high knowledge in backend and frontend development and also he is very good at competitive programming, he is always keep to move forward without ever being afraid to use new technologies. He does not hesitate to help his colleagues whenever he can. He manages to solve problems quickly and efficiently with typical optimism.",
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

  cpInfoOnlines: any = [
    {
      id: 1,
      title: 'LeetCode Profile',
      description: '',
      img: 'assets/images/leetcode.JPG',
      url: 'https://leetcode.com/Shafiqur/'
    },
    {
      id: 2,
      title: 'CodeChef Profile',
      description: '',
      img: 'assets/images/codechef.JPG',
      url: 'https://www.codechef.com/users/shafiq1680'
    },
    {
      id: 3,
      title: 'Codeforces Profile',
      description: '',
      img: 'assets/images/codeforces.JPG',
      url: 'https://codeforces.com/profile/stack-over-flow'
    },
  ]

  getCompetitiveOnline(): Observable<any> {
    return this.cpInfoOnlines;
  }

  cpInfoOnsites: any = [
    {
      id: 6,
      contestName: 'CodeSamurai Inter-University Hackathon (2022)',
      teamName: 'UITS_TESTATHON',
      host: ' University Of Dhaka',
      summary: 'I completed my first hackathon, CodeSamurai 2022, at the University Of Dhaka.It was a good experience for our team because of real- life problem - solving and how to solve that within a fixed time frame.Its a great event because the environment likes the best judging panel help,good food and volunteers, and other facilities.',
      siteStand: 'https://www.codesamuraibd.net/',
      stand: '',
      imgUrl: 'assets/images/codesamurai.jpeg',
    },
    {
      id: 5,
      contestName: 'UITS Collaboration Programming Contest 2022(UITS, BUBAT, BUBT) ',
      host: 'University of Information Technology and Sciences (UITS)',
      teamName: 'UITS_O(struggle)',
      summary: 'Our team became the champion at the UITS Inter-university collaboration programming contest - 2022(UITS, BUBT, IUBAT).It was a good experience for our team because we solve 6 problem and try all problem.',
      siteStand: ' https://www.hackerrank.com/contests/uits-collaboration-programming-contest-2022-1667932690/leaderboard',
      stand: 'Champion',
      imgUrl: 'assets/images/uits.jpeg',
    },
    {
      id: 4,
      contestName: 'EDU Inter University Programming Contest, 2022',
      host: 'East Delta University',
      teamName: 'UITS_O(struggle)',
      summary: 'It was a good experience for our team because we solve 4 without penalty and try all problem.But we solve two more problem but suddenly the contest was over that we don’t.But afterall the journey was so good and other team-mate and other enviroment',
      siteStand: ' https://drive.google.com/file/d/1dedX9DKYJpDzBYGWYAiFZcJvRUcYV4LQ/view?fbclid=IwAR06D0JZttiAVFEW98zWRVUGp9e2KxMqIioUi-Xmi9PUarjTdS5xg0PP_L0',
      stand: '11-Th',
      imgUrl: 'assets/images/edu.jpeg',
    },
    {
      id: 3,
      contestName: 'Cefalo CodeFiesta 2022: AUST IUPC',
      host: 'Ahsanullah University of Science and Technology (AUST)',
      teamName: 'UITS_O(try)',
      summary: 'It was my first inter university programming contest outsite my university,our team did not expect to solve 4 problem in first iupc but we did that.It was a good experience for our team because we solve 4 problem our coach and techer was very helpful of our contest.',
      siteStand: 'https://algo.codemarshal.org/contests/aust-2022/standings',
      stand: '73-th',
      imgUrl: 'assets/images/aust.jpeg',
    },
    {
      id: 2,
      contestName: 'BUET Inter University Programming Contest 2022',
      host: 'Bangladesh University of Engineering and Technology (BUET)',
      teamName: 'UITS_O(try)',
      summary: 'It was my third iupc contest,our team did not so well. We just solve 2 problem.Our team stuck 3th problem that was a mistake and we lose long time for that.It was a good experience for our team because learn form that mistake that help us future of our contest.',
      siteStand: ' https://toph.co/c/buet-inter-university-2022/standings',
      stand: '81-th',
      imgUrl: 'assets/images/buet.jpeg',
    },
    {
      id: 1,
      contestName: 'UITS Inter University Programming Contest, 2019',
      host: 'University of Information Technology and Sciences (UITS)',
      teamName: 'UITS_VIRUS',
      summary: 'It was my first inter university programming contest,our team did not so well. We just solve 2 problem.We was just first semester student in our university.It was a good experience for our team that help us future of our contest. From this contest we leran how to play in onsite contest.',
      siteStand: ' https://algo.codemarshal.org/contests/uits_iupc_19/standings',
      stand: '34-th',
      imgUrl: 'assets/images/uits.JPG',
    },
  ]

  getCompetitiveOnSite(): Observable<any> {
    return this.cpInfoOnsites;
  }
}
