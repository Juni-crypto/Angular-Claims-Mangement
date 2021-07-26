import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PolicyResult } from './../../model/policy-result';

@Component({
  selector: 'app-policy-provider-details-result',
  templateUrl: './policy-provider-details-result.component.html',
  styleUrls: ['./policy-provider-details-result.component.scss']
})
export class PolicyProviderDetailsResultComponent implements OnInit {

  public displayedColumns = ['providername', 'location'];
  result:PolicyResult[]=[];
  dataSource:MatTableDataSource<PolicyResult>;
  constructor(){}
  ngOnInit() {
    this.dataSource = new MatTableDataSource<PolicyResult>(history.state.data);
  }

}
