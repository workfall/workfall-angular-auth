import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInDown } from 'ng-animate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))])
  ],
})
export class LoginComponent {
  slideInDown: any;

  constructor(
    private router: Router
  ) {}

  handleLogin() {
    this.router.navigate(['/home'])
  }
}
