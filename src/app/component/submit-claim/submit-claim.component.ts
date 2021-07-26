import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MemberSubmitClaim } from './../../model/member-submit-claim';
import { MemberService } from './../../service/member.service';
import { ClaimDialogComponent } from './claim-dialog/claim-dialog.component';

@Component({
  selector: 'app-submit-claim',
  templateUrl: './submit-claim.component.html',
  styleUrls: ['./submit-claim.component.css']
})
export class SubmitClaimComponent implements OnInit {

  memberSubmitClaim: MemberSubmitClaim = {
    claimsId: null,
    memberId: null,
    policyId: null,
    hospitalId: null,
    totalClaimedAmt: null,
    totalBill: null
  };
  str: string = null;
  hasError:boolean=false;
  constructor(private memberService: MemberService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  submitMemberClaim(): void {
    if(this.memberSubmitClaim.memberId==null || this.memberSubmitClaim.policyId==null ||
      this.memberSubmitClaim.hospitalId==null || this.memberSubmitClaim.totalClaimedAmt==null ||
      this.memberSubmitClaim.totalBill==null){
        this.hasError=true;
        return;
      }
      else{
        this.hasError=false;
      }
    this.memberService.submitMemberClaim(this.memberSubmitClaim).subscribe(data => {
      this.str = data.claimsId;
      this.openDialog();
    })
  }

  openDialog(): void {
    
      let dialogRef = this.dialog.open(ClaimDialogComponent, {
        width: '400px',
        data: { claimsId: this.str }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

  }

}
