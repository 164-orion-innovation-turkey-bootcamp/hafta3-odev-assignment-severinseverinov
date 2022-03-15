import { Component,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isLogin=false;

  imageUrl='https://picsum.photos/800/600';


  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginUp();
  }
  back(){
    this.router.navigate(['login']);
  }

  //Kullanıcı giriş yapıp yapmadığı kontrol ve sayfa yönlendirmesi
  loginUp(){
    this.http.get<any>("http://localhost:3000/log")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
      return a.login
    });
    if(user){
      this.isLogin=user;
    }else{
      alert('Please login!');
      this.router.navigate(['login']);
    }
    })
  }


}
