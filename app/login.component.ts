import { Component, OnInit } from '@angular/core';
import { Auth }      from './auth.service';
import { Params } from '@angular/router';
import { Router }          from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


declare const FB:any;

@Component({
  selector: 'login',
  templateUrl: 'app/login.template.html'
})

export class LoginComponent {

  constructor() {

  }

    onFacebookLoginClick() {
        FB.init({
            appId      : '925699524238889',
            cookie     : false,  // enable cookies to allow the server to access
            // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use graph api version 2.8
        });
        FB.login();
    }

    statusChangeCallback(resp) {
        console.log('statusChangeCallback',resp);

    }

    ngOnInit() {
      console.log('ngOnInit');
        FB.getLoginStatus(response => {
            console.log(response);
            if (response.status === 'connected') {
                console.log('AUTH');
                // connect here with your server for facebook login by passing access token given by facebook
            }else if (response.status === 'not_authorized') {
                console.log('NOT');
            }else {
                console.log(response.status);
            }
        });
    }

  login(username, pass){

   let creadencials = {"email": username, "password": pass};

    this._authService.login(creadencials).subscribe(
         data => {
         console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.user);
            this.router.navigate(['/home']);
         }
    );
  }
}