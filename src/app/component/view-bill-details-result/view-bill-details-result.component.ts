import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BillDetailResult } from './../../model/bill-detail-result';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-bill-details-result',
  templateUrl: './view-bill-details-result.component.html',
  styleUrls: ['./view-bill-details-result.component.scss']
})
export class ViewBillDetailsResultComponent implements OnInit {

  public displayedColumns = ['memberid','policyid', 'lastdate','lastdue','lastpay', 'duedate'];
  result:BillDetailResult[]=[];
  dataSource:MatTableDataSource<BillDetailResult>;
  constructor(){}
  ngOnInit() {
    this.dataSource = new MatTableDataSource<BillDetailResult>(history.state.data);
  }
  


}
