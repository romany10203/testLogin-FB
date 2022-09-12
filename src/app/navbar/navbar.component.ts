import { Component, OnInit } from '@angular/core';
import { SocialAuthService , SocialUser , FacebookLoginProvider } from "angularx-social-login";
import { UsersService } from '../users.service';
import $ from '../../../node_modules/jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  infoUser:any;
  userInfo:Object = {id:"123456789",name:"user",email:"example@gmail.com",photo:"https://team.inria.fr/kerdata/files/2014/10/no-photo-150x150.jpg"};
  user: SocialUser;
  loggedIn: boolean;
  temp:string = "";
  tempS:string = "";

  constructor(private authService:SocialAuthService , _UsersService:UsersService) {
    this.infoUser = _UsersService.user;
  }

    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(userData => {
  
        console.log(userData);
        console.log(FacebookLoginProvider.PROVIDER_ID);
        this.user = userData;
        this.infoUser = {id:this.user.id,name:this.user.name,email:this.user.email,photo:this.user.photoUrl}
        
        document.getElementById("regLog").classList.add("d-none");
        this.temp = `<div class="container">
                        <a routerLink="/user"><P class="my-2 pointer">${this.user.firstName}</p></a>
                        <img class="mx-2 pointer rounded-circle img-fluid" width="40" height="40" src="${this.user.photoUrl}">
                        <i id="btnInfo" (click)="slideDown()" class="pointer fa fa-caret-down"></i>    
                    </div>`;

        document.getElementById("user").classList.replace("d-none","d-block");
        document.getElementById("mesg").classList.replace("d-none","d-block");
        document.getElementById("user").innerHTML=(this.temp);
        
      // console.log(this.infoUser);

      // this.infoUser.sendData(this.infoUser);
      })
    }

    slideDown(){
      window.alert("Hello");
      this.tempS = `<div class="sldUser m-2">
                      <p >${this.user.name}</p>
                      <ul>
                        <li class="nav-item"><a routerLink="/user">Your Information</a></li>
                        <li class="nav-item">Log out</li>
                      </ul>
                    </div>`; 
      document.getElementById("userSlide").innerHTML=(this.tempS);
      document.getElementById("btnInfo").addEventListener("click",function(){
  
        $("#userSlide").slideToggle(500);
      })
    }

  ngOnInit(): void {

  }

}
