import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    //signup reactive form template
    this.signupForm=this.fb.group({
      username:[null,Validators.required],
      firstname:[null,Validators.required],
      lastname:[null,Validators.required],
      phone:[null,Validators.required],
      genre:[null,Validators.required],
      email:[null,Validators.email],
      password:[null,Validators.required]
    });
  }

  //json dosyası kullanıcı kaydı ve uyarıları
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert('Signup successfull!');
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  }

}
