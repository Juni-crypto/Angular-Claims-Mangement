import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/service/member.service';
import { BillDetail } from './../../model/bill-detail';
import { BillDetailResult } from './../../model/bill-detail-result';

@Component({
  selector: 'app-view-bill-details',
  templateUrl: './view-bill-details.component.html',
  styleUrls: ['./view-bill-details.component.scss']
})
export class ViewBillDetailsComponent implements OnInit {
  billDetail:BillDetail={
    memberId:null,
    policyId:null

  }
  result:BillDetailResult[]=null;
  hasError:boolean=false;
  message:string|null;
  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }
  submitBillDetail(): void {
    if(this.billDetail.memberId==null || this.billDetail.policyId==null){
        this.hasError=true;
        this.message = "fill all the fields *";
        return;
      }
      else{
        this.hasError=false;
      }
    this.memberService.getBillDetails(this.billDetail).subscribe(response => {
      let res:BillDetailResult[]=response;
      this.router.navigateByUrl('/viewbilldetailsresult', { state: {data :res} } );
    },error=>{
      this.message=error.error.message;
      this.hasError=true;
    })
  }

}
