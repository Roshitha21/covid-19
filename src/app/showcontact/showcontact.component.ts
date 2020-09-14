import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-showcontact',
  templateUrl: './showcontact.component.html',
  styleUrls: ['./showcontact.component.css']
})
export class ShowcontactComponent implements OnInit {

  li:any; 
  lis=[]; 
  constructor(private http : HttpClient){ 
      
} 
  
  ngOnInit(): void { 
    this.http.get('https://api.rootnet.in/covid19-in/contacts') 
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      if(Response){   
        hideloader(); 
      } 
      console.log(Response) 
      this.li=Response; 
      this.lis=this.li.data.contacts.regional; 
    }); 
    function hideloader(){ 
      document.getElementById('loading').style.display = 'none';} 
  }} 