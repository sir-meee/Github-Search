import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from './profiles/profile.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import {FormsModule} from '@angular/forms';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RouterModule, Routes } from '@angular/router';
 const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'repositories', component: RepositoriesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileFormComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
