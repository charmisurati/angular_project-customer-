import { Injectable } from '@angular/core';
 import{HttpClient} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class CommonService {

 
  constructor(private http:HttpClient) { }

  getallproduct(){
    return this.http.get("http://localhost/angular_services/receiveproduct.php");

  }

  

  getoffer(id){
    return this.http.get("http://localhost/angular_services/getoffer.php?company_id="+id);

  }
 
  getseller(){
    return this.http.get("http://localhost/angular_services/getseller.php");
  }
  
  getproductbyid(company_id,offer_id,offer_name){
    return this.http.get("http://localhost/angular_services/receiveproductbyid.php?company_id="+company_id+"&offer_id="+offer_id+"&offer_name="+offer_name);
  }
}
