import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  mobile: number;
  trackingid: number;
  share: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, trackingid: 688192, name: 'Test', mobile: 4374377797, share: 'https://vkfdnvkf'},
];

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

 displayedColumns: string[] = ['position', 'trackingid', 'name', 'mobile', 'share'];
 dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
