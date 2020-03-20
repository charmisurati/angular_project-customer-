import { Component, OnInit } from '@angular/core';
import{CommonService} from '../services/common.service';
import{Clsoffer} from '../classes/clsoffer';
import { Clsgetseller } from '../classes/clsgetseller';
import{Clsproduct} from '../classes/clsproduct';

@Component({
  selector: 'app-shopcategory',
  templateUrl: './shopcategory.component.html',
  styleUrls: ['./shopcategory.component.css']
})
export class ShopcategoryComponent implements OnInit {
  arr=[];
  aarlist=[];
  arr1=[];
  arr2=[];
  commonarr = [];
  offlist=new Array<Clsproduct>();
  
  constructor(private comm:CommonService) { }

  ngOnInit() {
    this.getseller();
   this.receiveproduct();
 

  }



//display all the sellers
  getseller(){

    this.comm.getseller().subscribe(resp=>{
      this.arr=<Clsgetseller[]>resp;
      console.log(resp);
    })

  }

  //display product by particular seller
  getdatabysellername(id)
  {
    this.arr1 = [];
      for (var i =0;i< this.commonarr.length;i++)
      {
        var dic = this.commonarr[i];
        var sellerid = dic["company_id"];
         if(sellerid == id)
         {
          this.arr1.push(dic)
         }  
      }
  }

  //display product by particular seller and its particular offer
  getproductbyid(offer_id)
  {
    //alert(a);
    this.arr2=[];
    for(var i=0;i<this.arr1.length;i++)
    {
      if(this.arr1[i].offer_id==offer_id)
      {
        this.arr2.push(this.arr1[i]);
      }
    }
  }
  //display offers of particular seller
  getsellerbyid(id){
    this.aarlist=[];
    this.arr2=[];
    this.comm.getoffer(id).subscribe(resp=>{
      this.aarlist=<Clsoffer[]>resp;
      console.log(resp);
      this.getdatabysellername(id);
      for(var i=0;i<this.arr1.length;i++)
      {
        if(this.arr1[i].company_id==id)
        {
          this.arr2.push(this.arr1[i]);
        }
      }
    })
  }

  //display all the products
  receiveproduct(){
   
    this.comm.getallproduct().subscribe(resp=>{
      this.arr1=<Clsproduct[]>resp;
      this.commonarr = <Clsproduct[]>resp
      console.log(resp);
      this.arr2=this.arr1;
    })
  }
}
