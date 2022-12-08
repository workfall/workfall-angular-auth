import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  logOut() {
    this.apiService.dummyLogout();
    this.router.navigate(['/']);
  }
}
