import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'  
import { Data, ChildData } from '../models'  
  
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {  
  title = 'Covid19-India-Tracker';  
  allData: Data[];  
  totalData: Data;  
  selectedStateCode: string;  
  selectedDistrictCode: string;  
  stateData: Data;  
  statewiseData: ChildData[];  
  districtData: ChildData;  
  
  constructor(private service: DataService) { }  
  
  ngOnInit() {  
    this.getAllData();  
  }  
  
  getAllData() {  
    this.service.getAllData().subscribe(  
      response => {  
        this.allData = response.statewise;  
        this.totalData = this.allData.find(x => x.statecode == 'TT');  
        this.allData = this.allData.filter(x => x.statecode != 'TT' && x.statecode != 'UN');  
        this.getStateData();  
      }  
    )  
  }  
  
  getStateData() {  
    this.service.getStateData().subscribe(  
      response => {  
        this.statewiseData = response;  
      }  
    )  
  }  
  
  onStateSelected() {  
    this.stateData = this.allData.find(x => x.statecode == this.selectedStateCode)  
    let stateCode = (this.selectedStateCode == 'LA') ? 'LK' : this.selectedStateCode;  
    this.districtData = this.statewiseData.find(x => x.id == `IN-${stateCode}`);  
  }  
}  
