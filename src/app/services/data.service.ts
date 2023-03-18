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

  cvurl = "https://drive.google.com/file/d/1W5PUodb7qO6Ttl1UzOtFwGT0uMdYmUOI/view?usp=share_linkhttps://drive.google.com/file/d/1W5PUodb7qO6Ttl1UzOtFwGT0uMdYmUOI/view"

  getResume() {
    return this.cvurl;
  }
  about = "I’m a competitive programmer and co-founder of programmeraid.com, which is a programming content-sharing and problem-solving tracking website for Bengali programmers. I am looking to establish a career in information technology. I wish to work for a growth-oriented company and contribute to the organization's development while upgrading my skill set. I have solved 1500+ problems on various online judging platforms. In addition, I attended the national competitive programming contest and learned a lot about algorithms, coding, and how to work with a team to solve problems. I am a learner of Angular and ASP.NET Core."
  getAboutMe() {
    return this.about;
  }

  Frameworks: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 8+',
      'imageUrl': 'https://img.icons8.com/fluency/48/null/angularjs.png'
    },
    {
      'id': '2',
      'skill': 'ASP.NET WEB API',
      'imageUrl': 'https://img.icons8.com/color/48/null/net-framework.png'
    },
    {
      'id': '3',
      'skill': 'HTML, CSS',
      'imageUrl': 'https://img.icons8.com/color/48/null/source-code.png'
    },
    {
      'id': '4',
      'skill': 'MS SQL',
      'imageUrl': 'https://img.icons8.com/color/48/null/microsoft-sql-server.png'
    },
    {
      'id': '5',
      'skill': 'Oracle SQL',
      'imageUrl': 'https://img.icons8.com/color/48/null/oracle-logo.png'
    }
  ];

  Language: any = [
    {
      'id': '1',
      'skill': 'C/C++',
      'imageUrl': 'https://img.icons8.com/color/48/null/c-plus-plus-logo.png'
    },
    {
      'id': '2',
      'skill': 'C#',
      'imageUrl': 'https://img.icons8.com/color/48/null/c-sharp-logo-2.png'
    },
    {
      'id': '3',
      'skill': 'JavaScript/TypeScript',
      'imageUrl': 'https://img.icons8.com/fluency/48/null/typescript--v2.png'
    },
    {
      'id': '4',
      'skill': 'Python',
      'imageUrl': 'https://img.icons8.com/color/48/null/python--v1.png'
    },
    {
      'id': '5',
      'skill': 'Java',
      'imageUrl': 'https://img.icons8.com/color/48/null/java-coffee-cup-logo--v1.png'
    }
  ];

  TOOLs: any = [
    {
      'id': '1',
      'skill': 'GITHUB',
      'imageUrl': 'https://img.icons8.com/ios-filled/48/null/github.png'
    },
    {
      'id': '2',
      'skill': 'Linux/Windows',
      'imageUrl': 'https://img.icons8.com/fluency/48/null/operating-system.png'
    },
    {
      'id': '3',
      'skill': 'GITLAB',
      'imageUrl': 'https://img.icons8.com/color/48/null/gitlab.png'
    },
    {
      'id': '4',
      'skill': 'Trello',
      'imageUrl': 'https://img.icons8.com/color/48/null/trello.png'
    },
    {
      'id': '5',
      'skill': 'Docker',
      'imageUrl': 'https://img.icons8.com/fluency/48/null/docker.png'
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
      degreeName: 'Information Technology (IT)',
      institution: 'University of Information Technology and Sciences',
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
      id: 8,
      contestName: 'ICPC ASIA DHAKA REGIONAL CONTEST ONSITE - 2022',
      teamName: 'UITS_O(struggle)',
      host: 'GREEN UNIVERSITY OF BANGLADESH',
      summary: 'It was a good experience for our team because we solved 3 problems in our university history.But our standing was not good as your expectation.We tried five problem and we are able to solve 3 of them.It was my first onsite ICPC',
      siteStand: 'https://algo.codemarshal.org/contests/dhaka-22/standings',
      stand: '91th',
      imgUrl: 'assets/images/icpc-pic.jpg',
    },
    {
      id: 7,
      contestName: 'CodeSamurai Inter-University Hackathon (2022)',
      teamName: 'UITS_TESTATHON',
      host: 'University Of Dhaka',
      summary: 'I completed my first hackathon, CodeSamurai 2022, at the University Of Dhaka.It was a good experience for our team because of real- life problem - solving and how to solve that within a fixed time frame.Its a great event because the environment likes the best judging panel help,good food and volunteers, and other facilities.',
      siteStand: 'https://www.codesamuraibd.net/',
      stand: '',
      imgUrl: 'assets/images/codesamurai.jpeg',
    },
    {
      id: 6,
      contestName: 'UITS Collaboration Programming Contest 2022(UITS, BUBAT, BUBT) ',
      host: 'University of Information Technology and Sciences (UITS)',
      teamName: 'UITS_O(struggle)',
      summary: 'Our team became the champion at the UITS Inter-university collaboration programming contest - 2022(UITS, BUBT, IUBAT).It was a good experience for our team because we solve 6 problem and try all problem.',
      siteStand: ' https://www.hackerrank.com/contests/uits-collaboration-programming-contest-2022-1667932690/leaderboard',
      stand: 'Champion',
      imgUrl: 'assets/images/uits.jpeg',
    },
    {
      id: 6,
      contestName: 'Cefalo SUST Inter University Programming Contest 2023',
      host: 'Shahjalal University of Science and Technology (SUST)',
      teamName: 'UITS_O(struggle)',
      summary: 'It was a worst experience for our team because we solve only single problem beacuse of wrong problem choice.But It help our for future contest',
      siteStand: ' https://toph.co/c/sust-inter-university-2023/standings',
      stand: '',
      imgUrl: 'assets/images/sust.jpg',
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
