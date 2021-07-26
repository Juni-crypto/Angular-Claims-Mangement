import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false;
  hasError: boolean = false;
  message:string| null;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    const inputs = document.querySelectorAll(".input");
		function addcl() {
			let parent = this.parentNode.parentNode;
			parent.classList.add("focus");
		}
		function remcl() {
			let parent = this.parentNode.parentNode;
			if (this.value == "") {
				parent.classList.remove("focus");
			}
		}
		inputs.forEach(input => {
			input.addEventListener("focus", addcl);
			input.addEventListener("blur", remcl);
		});
  }

  checkLogin() {
    if(this.username==='' || this.password===''){
      this.hasError=true;
      this.message="fill username and password fields";
      return;
    }
    else{
      this.hasError=true;
      this.message=null;
    }
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {

        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        console.log(error);
        if(error.status==0){
          this.hasError=true;
          this.message = "Internal Server Error. Try again later";
        }
        if(error.status==401){
          this.hasError=true;
          this.message = "Invalid Credentials";
        }
      }
    )
    );

  }

}