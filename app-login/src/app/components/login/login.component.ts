import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup;
  isLogin=false;

  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router) { }

  //login reactive form template
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[null,Validators.required],
      password:[null,Validators.required]
    })
  }

  loginUp(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
      return a.username===this.loginForm.value.username && a.password===this.loginForm.value.password
    });
    if(user){
      alert('Login success!');
      this.loginForm.reset();
      this.router.navigate(['main'])
    }else{
      alert('User not found! Please check your informations.');
      this.loginForm.reset();
    }
    })
  }


}
