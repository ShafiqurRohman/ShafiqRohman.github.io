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



@NgModule({
  declarations: [
    ProfileShowComponent,
    NavbarComponent,
    FooterComponent,
    IntroductionComponent,
    AboutMeComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ProfileInfoModule { }
