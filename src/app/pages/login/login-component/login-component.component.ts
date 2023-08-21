import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/sevices/login-services.service';
import Swal from 'sweetalert2';

export class login{
  id:any
  username:any
  password:any
  roles:any
  status:any
  confirmPassword:any
}
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})


export class LoginComponentComponent {

  login_model: login = new login();

  constructor(private login_services:LoginServicesService,private route:Router){}



  login_process(username: any, password: any) {
    this.login_services.login_authentication(username, password).subscribe(
      (respo: any) => {
        console.log(respo);
  
        if (respo) {
          sessionStorage.setItem("username", respo.username);
          this.route.navigate(['home']);
          Swal.fire({
            title: 'Success!',
            text: 'Login successful.',
            icon: 'success'
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Login failed.',
            icon: 'error'
          });
        }
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred during login.',
          icon: 'error'
        });
      }
    );
  }
  

  login(){
      this.login_process(this.login_model.username,this.login_model.password)
      // console.log(this.login_model);
  }
}
