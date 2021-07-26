import { Component, OnInit } from '@angular/core';
import { ClaimStatusResult } from './../../model/claim-status-result';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-claim-status-result',
  templateUrl: './view-claim-status-result.component.html',
  styleUrls: ['./view-claim-status-result.component.scss']
})
export class ViewClaimStatusResultComponent implements OnInit {
  
  public displayedColumns = ['claimid', 'memberid', 'claimstatus', 'claimdesc'];
  result:ClaimStatusResult[]=[];
  dataSource = new MatTableDataSource<ClaimStatusResult>(this.result);
  constructor(){}

  ngOnInit() {
    this.result.push(history.state.data);
  }

}
