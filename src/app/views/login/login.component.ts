import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInDown } from 'ng-animate';

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
}
