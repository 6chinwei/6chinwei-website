import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingSectionComponent } from './sections/landing-section/landing-section.component';
import { InfoSectionComponent } from './sections/info-section/info-section.component';
import { ProjectSectionComponent } from './sections/project-section/project-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingSectionComponent,
    InfoSectionComponent,
    ProjectSectionComponent,
    ContactSectionComponent,
    HeaderComponent,
    ArticleComponent,
    SocialIconComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
