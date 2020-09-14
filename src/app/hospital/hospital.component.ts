import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  li:any; 
  lis=[]; 
  constructor(private http : HttpClient){ 
      
} 
  
  ngOnInit(): void { 
    this.http.get('https://api.rootnet.in/covid19-in/hospitals/beds') 
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      if(Response){   
        hideloader(); 
      } 
      console.log(Response) 
      this.li=Response; 
      this.lis=this.li.data.regional; 
    }); 
    function hideloader(){ 
      document.getElementById('loading').style.display = 'none';} 
  }} 