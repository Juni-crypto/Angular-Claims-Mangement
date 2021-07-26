import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/service/member.service';
import { PolicyResult } from './../../model/policy-result';

@Component({
  selector: 'app-policy-provider-details',
  templateUrl: './policy-provider-details.component.html',
  styleUrls: ['./policy-provider-details.component.scss']
})
export class PolicyProviderDetailsComponent implements OnInit {

  policyId:string=null;
  hasError:boolean=false;
  message:string|null;
  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }
  submitPolicyId(): void {
    if(this.policyId==null){
        this.hasError=true;
        this.message = "fill all the fields *";
        return;
      }
      else{
        this.hasError=false;
      }
    this.memberService.getProviderDetails(this.policyId).subscribe(response => {
      let res:PolicyResult[]=response;
      this.router.navigateByUrl('/policyproviderdetailsresult', { state: {data :res} } );
    },error=>{
      this.message=error.error.message;
      this.hasError=true;
    });
  }

}
