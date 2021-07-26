export interface BillDetailResult {
    memberPolicyId:number;
    memberId:string;
	policyId:string;
	lastPremiumDate:Date;
	premiumAmtDue:number;
	lastPaymentInfo:string;
	dueDate:Date;
}