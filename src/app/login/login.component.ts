import { Component, OnInit } from '@angular/core';
import{Clslogin} from '../classes/clslogin';
import{CommonService} from '../services/common.service';
import{HttpClient} from  '@angular/common/http';
import{ Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  list= new Array<Clslogin>();
  constructor(private comm:CommonService,private http:HttpClient,private nav:Router) { }


  ngOnInit() {
  }
  loginaction(f){
    
   console.log(f.value.email);
   console.log(f.value.password);
   
   var email=f.value.email;
   var password=f.value.password;

    this.http.get("http://localhost/angular_services/sellerlogin.php?email="+email+"&password="+password).subscribe(resp=>{
      this.list=<Clslogin[]>resp;
      if(this.list.length==1){
        this.nav.navigateByUrl("/master/master/homepage");
      }
     
    })

   

  

  }
}
