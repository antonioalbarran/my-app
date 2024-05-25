import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent,NavbarComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: LoginService) {}
  private token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaXQuYWxiYXJyYW4uY29tLm14L2VuZHBvaW50L2FwaS9hdXRoL25vbWluYS9zaWduLWluIiwiaWF0IjoxNzE1MjgyNzQ1LCJleHAiOjE3MTUyOTM1NDUsIm5iZiI6MTcxNTI4Mjc0NSwianRpIjoiY3VKMjhPN2t3MDZsWDVvcSIsInN1YiI6IjQ1NiIsInBydiI6ImY5ODVjYWVmNzkyYmExM2Q5Yjc3ZTMwODk4MTcyYTlhZTQ5YjBkNGUifQ.2F4KWp7ODz8UHpemwJoGOFuvDNmwLk2SJxlKufZ2Q-E';
  userName  = '';

  ngOnInit() {

    this.service.me(this.token).subscribe(
      {
        next: (user) => {
          console.log(user);
          this.userName = user.username;
        },error: (error) => {
          console.error(error);
          window.location.href = 'login';
        }
      }
    );
  }
}
