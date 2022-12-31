import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileShowComponent } from './profile-show/profile-show.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ReferenceComponent } from './reference/reference.component';
import { EducationComponent } from './education/education.component';
import { CompetitiveComponent } from './competitive/competitive.component';



@NgModule({
  declarations: [
    ProfileShowComponent,
    NavbarComponent,
    FooterComponent,
    IntroductionComponent,
    AboutMeComponent,
    SkillComponent,
    ProjectComponent,
    ContactComponent,
    ExperienceComponent,
    ReferenceComponent,
    EducationComponent,
    CompetitiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ProfileInfoModule { }
