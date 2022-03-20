import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sidebar', component: SidebarComponent },
  // { path: 'followers/:id/:username', component: GithubProfileComponent },
  // { path: 'posts', component: PostComponent },
  // { path: 'zippy', component: ZippyContainerComponent },
  // { path: 'change-password', component: ChangePasswordFormComponent },
  // { path: 'new-course', component: NewCourseFormComponent },
  // { path: 'course-form', component: CourseFormComponent },
  // { path: 'sign-up', component: SignupFormComponent },
  // { path: 'contact-form', component: ContactFormComponent },
  // { path: 'like', component: LikeComponent },
  { path: '**', component: HomeComponent }, // TODO use a notfoundcomponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
