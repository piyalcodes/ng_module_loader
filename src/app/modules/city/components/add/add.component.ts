import { Component, OnInit } from '@angular/core';
//import { SLClient } from '../../../../core/http/slclient.service';

@Component({
  selector: 'city-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(
    // private slClient: SLClient
  ) { }

  ngOnInit() {
  }

  addCity() {


    // this.httpService._get("http://google.com");

  }

}
