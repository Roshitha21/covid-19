import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  li:any; 
  lis=[]; 
  constructor(private http : HttpClient){ 
      
} 
  
  ngOnInit(): void { 
    this.http.get('https://api.rootnet.in/covid19-in/notifications') 
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      if(Response){   
        hideloader(); 
      } 
      console.log(Response) 
      this.li=Response; 
      this.lis=this.li.data.notifications; 
    }); 
    function hideloader(){ 
      document.getElementById('loading').style.display = 'none';} 
  }} 