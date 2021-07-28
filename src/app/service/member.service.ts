import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { ClaimStatus } from '../model/claim-status';
import { MemberSubmitClaim } from './../model/member-submit-claim';
import { ClaimStatusResult } from './../model/claim-status-result';
import { BillDetail } from './../model/bill-detail';
import { BillDetailResult } from './../model/bill-detail-result';
import { PolicyResult } from '../model/policy-result';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  BASE_URL="http://memberservice-env.eba-nepmk5vx.us-west-2.elasticbeanstalk.com";
  BASE_URL1="http://policyservice-env.eba-cue4qxcf.us-west-2.elasticbeanstalk.com";
  constructor(private httpClient: HttpClient) {}

  public submitMemberClaim(memberSubmitClaim:MemberSubmitClaim):Observable<any>{
    return this.httpClient.post<MemberSubmitClaim>(
      this.BASE_URL+"/submitclaim",memberSubmitClaim
    ).pipe(
      map((data) => {
        //You can perform some transformation here
       return data;
     }));

  }
  public getClaimStatus(memberSubmitClaim:MemberSubmitClaim):Observable<any>{
    return this.httpClient.get<ClaimStatusResult>(
      this.BASE_URL+"/getClaimStatus/"+memberSubmitClaim.claimsId+"/"+memberSubmitClaim.policyId+"/"+memberSubmitClaim.memberId
    );
  }
  public getBillDetails(billDetail:BillDetail):Observable<any>{
    return this.httpClient.get<BillDetailResult[]>(
      this.BASE_URL+"/viewbill/"+billDetail.memberId+"/"+billDetail.policyId
    );
  }
  public getProviderDetails(policyId):Observable<any>{
    return this.httpClient.get<PolicyResult[]>(
      this.BASE_URL1+"/getChainOfProviders/"+policyId
    );
  }

}
