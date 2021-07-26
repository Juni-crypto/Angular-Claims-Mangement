import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberSubmitClaim } from 'src/app/model/member-submit-claim';
import { MemberService } from 'src/app/service/member.service';
import { ClaimStatusResult } from './../../model/claim-status-result';

@Component({
  selector: 'app-view-claim-status',
  templateUrl: './view-claim-status.component.html',
  styleUrls: ['./view-claim-status.component.scss']
})
export class ViewClaimStatusComponent implements OnInit {
  memberSubmitClaim: MemberSubmitClaim = {
    claimsId: null,
    memberId: null,
    policyId: null,
    hospitalId: null,
    totalClaimedAmt: null,
    totalBill: null
  };
  message:string|null;
  hasError:boolean=false;
  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }
  submitMemberClaimDetail(): void {
    if(this.memberSubmitClaim.memberId==null || this.memberSubmitClaim.policyId==null ||
      this.memberSubmitClaim.claimsId==null){
        this.message = "fill all the fields *";
        this.hasError=true;
        return;
      }
      else{
        this.hasError=false;
      }
    this.memberService.getClaimStatus(this.memberSubmitClaim).subscribe(data => {
      let result:ClaimStatusResult={
        claimId:data.claimId,
        memberId:data.memberId,
        claimStatus:data.claimStatus,
        claimDesc:data.claimDesc
      };
      this.router.navigateByUrl('/viewclaimstatusresult', { state: {data :result } } );
    },error=>{
      this.message=error.error.message;
      this.hasError=true;
    })
  }
}
