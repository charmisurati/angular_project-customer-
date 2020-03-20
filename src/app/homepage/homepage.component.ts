import { Component, OnInit } from '@angular/core';
import{CommonService} from '../services/common.service';
import{Clsproduct} from '../classes/clsproduct';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private comm:CommonService) { }
  arr=[];

  ngOnInit() {
    this.getproduct();
  }
  getproduct(){
   
    this.comm.getallproduct().subscribe(resp=>{
      this.arr=<Clsproduct[]>resp;
      console.log(resp);
    })
  }
}
