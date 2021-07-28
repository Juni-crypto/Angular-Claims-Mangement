(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\n    <mat-card-header>\n        <mat-card-title>Add Employee</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <form class=\"example-form\">\n            <table class=\"example-full-width\" cellspacing=\"0\">\n                <tr>\n                    <td>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Username\" [(ngModel)]=\"user.name\" name=\"name\" required>\n                        </mat-form-field>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Designation\" [(ngModel)]=\"user.designation\" name=\"designation\" required>\n                        </mat-form-field>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Employee Id\" [(ngModel)]=\"user.empId\" name=\"employeeid\" required>\n                        </mat-form-field>\n                    </td>\n                </tr>\n            </table>\n        </form>\n        <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-raised-button (click)=\"createEmployee()\" color=\"primary\">Create</button>\n    </mat-card-actions>\n</mat-card>\n\n\n<!-- \n<div class=\"col-md-6\">\n    <h2 class=\"text-center\">Add Employee</h2>\n    <form>\n        <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input type=\"name\" [(ngModel)]=\"user.name\" placeholder=\"Name\" name=\"name\" class=\"form-control\" id=\"name\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"designation\">Designation:</label>\n            <input [(ngModel)]=\"user.designation\" placeholder=\"Designation\" name=\"designation\" class=\"form-control\" id=\"designation\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"empId\">Employee Id</label>\n            <input [(ngModel)]=\"user.empId\" placeholder=\"Employee Id\" name=\"Employee Id\" class=\"form-control\" id=\"employeeid\">\n        </div>\n\n        <button class=\"btn btn-success\" (click)=\"createEmployee()\">Create</button>\n    </form>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-page/about-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-page/about-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner\">\n    <mat-card class=\"center-card\">\n        <h2>ABOUT US</h2>\n    </mat-card>\n    <br>\n    <mat-card class=\"form-card\">\n            <div class=\"example-container\">\n                <blockquote class=\"blockquote\">\n\t\t\t\t\t<p>Health insurance is a type of insurance that covers the\n\t\t\t\t\t\twhole or a part of the risk of a person incurring medical\n\t\t\t\t\t\texpenses. As with other types of insurance is risk among many\n\t\t\t\t\t\tindividuals. By estimating the overall risk of health risk and\n\t\t\t\t\t\thealth system expenses over the risk pool, an insurer can develop\n\t\t\t\t\t\ta routine finance structure, such as a monthly premium to provide\n\t\t\t\t\t\tthe money to pay for the health care benefits specified in the\n\t\t\t\t\t\tinsurance agreement.The benefit is administered by a central\n\t\t\t\t\t\torganization, such as a government agency, private business, or\n\t\t\t\t\t\tnot-for-profit entity.</p>\n\t\t\t\t</blockquote>\n                \n            </div>\n            <br>\n            <div>\n                <span  > \n                    <button class=\"mat-raised-button mat-accent text-white\" routerLink=\"/memberHome\" style=\"margin-right: 14px;\">Member Portal</button>\n                </span>\n            </div>\n    </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin-page/admin-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin-page/admin-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner\">\n    <br>\n    <mat-card class=\"center-card\" style=\"background-color: black;   width:50%\">\n       SERVICES DASHBOARD\n    </mat-card>\n    <br>\n    <mat-card class=\"center-card\" style=\"background-color: rgb(255, 255, 255);   width:50%\" >\n            <div>\n                <span> \n                   <a href=\"http://adminservice-env.eba-rbcbeqcx.us-west-2.elasticbeanstalk.com\" target=\"_blank\"><button class=\"mat-raised-button mat-accent text-white\"  style=\"margin-right: 14px;\">Microservices Management</button></a>\n                </span>\n                <span> \n                    <a href=\"http://localhost:3000/d/QylPEIW7z/mfpe?orgId=1\" target=\"_blank\"><button class=\"mat-raised-button mat-accent text-white\"  style=\"margin-right: 14px;\">Hystrix-System-Usage</button></a>\n                 </span>\n            </div>\n    </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner d-flex justify-content-center align-items-center\">\n    <div class=\"text-center\">\n        <h1>Claims Management System</h1>\n        <p>Manage all your Claims and Settlements all in one Place.</p>\n        <mat-card class=\"example-card\">\n            <button routerLink=\"/memberHome\"  class=\"mat-raised-button mat-primary text-white\">Member Portal</button>\n        </mat-card>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/member-home/member-home.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/member-home/member-home.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner d-flex justify-content-center align-items-center\">\n    <mat-card class=\"center-card\">\n        <h1>Member Portal</h1>\n    </mat-card>\n    <div class=\"text-center\">\n        <mat-grid-list cols=\"2\" rowHeight=\"150px\">\n            <mat-grid-tile>\n                <mat-card class=\"example-card\">\n                    <button routerLink=\"/submitclaim\" class=\"mat-raised-button mat-accent text-white uppercase\">Submit Claim</button>\n                </mat-card> \n            </mat-grid-tile>\n            <mat-grid-tile>\n                <mat-card class=\"example-card\">\n                    <button routerLink=\"/viewclaimstatus\" class=\"mat-raised-button mat-accent text-white\">View Claim\n                        Status</button>\n                </mat-card>\n            </mat-grid-tile>\n            <mat-grid-tile>\n                <mat-card class=\"example-card\">\n                    <button routerLink=\"/viewbilldetails\" class=\"mat-raised-button mat-accent text-white\">View Bill\n                        Details</button>\n                </mat-card>\n            </mat-grid-tile>\n            <mat-grid-tile>\n                <mat-card class=\"example-card\">\n                    <button routerLink=\"/policyproviderdetails\" class=\"mat-raised-button mat-accent text-white\">Policy Provider\n                        Details</button>\n                </mat-card>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/policy-provider-details-result/policy-provider-details-result.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/policy-provider-details-result/policy-provider-details-result.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner\">\n    <mat-card class=\"center-card\">\n        <h2>Policy Provider Details</h2>\n    </mat-card>\n    <br>\n    <mat-card class=\"form-card\">\n            <div class=\"example-container mat-elevation-z2\">\n                <table mat-table #table [dataSource]=\"dataSource\">\n                    <ng-container matColumnDef=\"providername\">\n                        <th mat-header-cell *matHeaderCellDef> POLICY PROVIDER </th>\n                        <td mat-cell *matCellDef=\"let policyDetail\"> {{policyDetail.providerName}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"location\">\n                        <th mat-header-cell *matHeaderCellDef> LOCATION </th>\n                        <td mat-cell *matCellDef=\"let policyDetail\"> {{policyDetail.location}} </td>\n                    </ng-container>\n        \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n            </div>\n            <div>\n                <span  class=\"btn-right\"> \n                    <button class=\"mat-raised-button mat-accent text-white\" routerLink=\"/memberHome\">Member Portal</button>\n                    <button class=\"mat-raised-button mat-light text-white\" routerLink=\"/policyproviderdetails\" style=\"margin-right: 14px;\">Back</button>\n                </span>\n            </div>\n    </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/policy-provider-details/policy-provider-details.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/policy-provider-details/policy-provider-details.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner\">\n    <mat-card class=\"center-card\">\n        <h2>Submit your Policy ID</h2>\n    </mat-card>\n    <br>\n    <mat-card class=\"form-card\">\n            <div class=\"example-container\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Policy Id\" [(ngModel)] =\"policyId\" required>\n                </mat-form-field>\n            </div>\n            <div>\n                <span> \n                    <span *ngIf=\"hasError\" style=\"font-size: 14px; color: red; display: inline; margin-right: 56%; text-transform: lowercase\">{{ message }}</span>\n                    <button class=\"mat-raised-button mat-accent text-white btn-right\" (click)=\"submitPolicyId()\">Submit</button>\n                    <button class=\"mat-raised-button mat-light text-white btn-right\" routerLink=\"/memberHome\" style=\"margin-right: 14px;\">Back</button>\n                </span>\n            </div>\n    </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/submit-claim/claim-dialog/claim-dialog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/submit-claim/claim-dialog/claim-dialog.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog\">\n<h1 mat-dialog-title>Claims Submission</h1>\n<div mat-dialog-content>\n  <p>Your Claim Request has been Submitted Successfully.</p>\n  <p>Your Claim ID is {{ data.claimsId }}.</p>\n</div>\n<div mat-dialog-actions class=\"btn-right\">\n  <button mat-button (click)=\"onOkClick()\"  cdkFocusInitial>Back to Member Portal</button>\n</div>\n</div>\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/submit-claim/submit-claim.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/submit-claim/submit-claim.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner\">\n    <mat-card class=\"center-card\">\n        <h2>Submit your Claim Details</h2>\n    </mat-card>\n    <br>\n    <mat-card class=\"form-card\">\n            <div class=\"example-container\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Member Id\" [(ngModel)] =\"memberSubmitClaim.memberId\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Policy Id\" [(ngModel)] =\"memberSubmitClaim.policyId\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Hospital Id\" [(ngModel)] =\"memberSubmitClaim.hospitalId\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Bill Amount\" [(ngModel)] =\"memberSubmitClaim.totalBill\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Claim Amount\" [(ngModel)] =\"memberSubmitClaim.totalClaimedAmt\" required>\n                </mat-form-field>\n            </div>\n            <div>\n                <span  class=\"btn-right\"> \n                    <button class=\"mat-raised-button mat-accent text-white\" (click)=\"submitMemberClaim()\">Submit</button>\n                    <button class=\"mat-raised-button mat-light text-white\" routerLink=\"/memberHome\" style=\"margin-right: 14px;\">Back</button>\n                    <span *ngIf=\"hasError\" style=\"size: 4px; color: red; display: inline; margin-right: 59%;\">fill all the fields *</span>\n                </span>\n            </div>\n    </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-bill-details-result/view-bill-details-result.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-bill-details-result/view-bill-details-result.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner\">\n    <mat-card class=\"center-card\">\n        <h2>Your Bill Detail</h2>\n    </mat-card>\n    <br>\n    <mat-card class=\"form-card\">\n            <div class=\"example-container mat-elevation-z2\">\n                <table mat-table #table [dataSource]=\"dataSource\">\n                    <ng-container matColumnDef=\"memberid\">\n                        <th mat-header-cell *matHeaderCellDef> MEMBER ID </th>\n                        <td mat-cell *matCellDef=\"let billDetail\"> {{billDetail.memberId}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"policyid\">\n                        <th mat-header-cell *matHeaderCellDef> POLICY ID </th>\n                        <td mat-cell *matCellDef=\"let billDetail\"> {{billDetail.policyId}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"lastdate\">\n                        <th mat-header-cell *matHeaderCellDef> LAST PREMIUM DATE </th>\n                        <td mat-cell *matCellDef=\"let billDetail\"> {{billDetail.lastPremiumDate | date:'dd-MM-yyyy'}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"lastdue\">\n                        <th mat-header-cell *matHeaderCellDef> PREMIUM AMOUNT DUE </th>\n                        <td mat-cell *matCellDef=\"let billDetail\"> {{billDetail.premiumAmtDue}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"lastpay\">\n                        <th mat-header-cell *matHeaderCellDef> LAST PAYMENT INFO </th>\n                        <td mat-cell *matCellDef=\"let billDetail\"> {{billDetail.lastPaymentInfo}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"duedate\">\n                        <th mat-header-cell *matHeaderCellDef> DUE DATE </th>\n                        <td mat-cell *matCellDef=\"let billDetail\"> {{billDetail.dueDate | date:'dd-MM-yyyy'}} </td>\n                    </ng-container>\n            \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n            </div>\n            <div>\n                <span  class=\"btn-right\"> \n                    <button class=\"mat-raised-button mat-accent text-white\" routerLink=\"/memberHome\">Member Portal</button>\n                    <button class=\"mat-raised-button mat-light text-white\" routerLink=\"/viewbilldetails\" style=\"margin-right: 14px;\">Back</button>\n                </span>\n            </div>\n    </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-bill-details/view-bill-details.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-bill-details/view-bill-details.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner\">\n    <mat-card class=\"center-card\">\n        <h2>Submit your Bill Details</h2>\n    </mat-card>\n    <br>\n    <mat-card class=\"form-card\">\n            <div class=\"example-container\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Member Id\" [(ngModel)] =\"billDetail.memberId\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Policy Id\" [(ngModel)] =\"billDetail.policyId\" required>\n                </mat-form-field>\n            </div>\n            <div>\n                <span> \n                    <span *ngIf=\"hasError\" style=\"size: 3px; color: red; display: inline; margin-right: 56%; text-transform: lowercase\">{{ message }}</span>\n                    <button class=\"mat-raised-button mat-accent text-white btn-right\" (click)=\"submitBillDetail()\">Submit</button>\n                    <button class=\"mat-raised-button mat-light text-white btn-right\" routerLink=\"/memberHome\" style=\"margin-right: 14px;\">Back</button>\n                </span>\n            </div>\n    </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-claim-status-result/view-claim-status-result.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-claim-status-result/view-claim-status-result.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner\">\n    <mat-card class=\"center-card\">\n        <h2>Your Claim Status</h2>\n    </mat-card>\n    <br>\n    <mat-card class=\"form-card\">\n            <div class=\"example-container mat-elevation-z2\">\n                <table mat-table #table [dataSource]=\"dataSource\">\n                    <ng-container matColumnDef=\"claimid\">\n                        <th mat-header-cell *matHeaderCellDef> CLAIM ID </th>\n                        <td mat-cell *matCellDef=\"let claimStatus\"> {{claimStatus.claimId}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"memberid\">\n                        <th mat-header-cell *matHeaderCellDef> MEMBER ID </th>\n                        <td mat-cell *matCellDef=\"let claimStatus\"> {{claimStatus.memberId}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"claimstatus\">\n                        <th mat-header-cell *matHeaderCellDef> CLAIM STATUS </th>\n                        <td mat-cell *matCellDef=\"let claimStatus\"> {{claimStatus.claimStatus}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"claimdesc\">\n                        <th mat-header-cell *matHeaderCellDef> STATUS DESC </th>\n                        <td mat-cell *matCellDef=\"let claimStatus\"> {{claimStatus.claimDesc}} </td>\n                    </ng-container>\n            \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n            </div>\n            <div>\n                <span  class=\"btn-right\"> \n                    <button class=\"mat-raised-button mat-accent text-white\" routerLink=\"/memberHome\">Member Portal</button>\n                    <button class=\"mat-raised-button mat-light text-white\" routerLink=\"/viewclaimstatus\" style=\"margin-right: 14px;\">Back</button>\n                </span>\n            </div>\n    </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-claim-status/view-claim-status.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-claim-status/view-claim-status.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner\">\n    <mat-card class=\"center-card\">\n        <h2>Submit your Claim Details</h2>\n    </mat-card>\n    <br>\n    <mat-card class=\"form-card\">\n            <div class=\"example-container\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Claim Id\" [(ngModel)] =\"memberSubmitClaim.claimsId\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Member Id\" [(ngModel)] =\"memberSubmitClaim.memberId\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter the Policy Id\" [(ngModel)] =\"memberSubmitClaim.policyId\" required>\n                </mat-form-field>\n            </div>\n            <div>\n                <span> \n                    <span *ngIf=\"hasError\" style=\"font-size: 14px; color: red; display: inline; margin-right: 56%; text-transform: capitalize\">{{ message }} *</span>\n                    <button class=\"mat-raised-button mat-accent text-white btn-right\" (click)=\"submitMemberClaimDetail()\">Submit</button>\n                    <button class=\"mat-raised-button mat-light text-white btn-right\" routerLink=\"/memberHome\" style=\"margin-right: 14px;\">Back</button>\n                </span>\n            </div>\n    </mat-card>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"employees\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"designation\">\n        <th mat-header-cell *matHeaderCellDef> Designation </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.designation}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef> Action </th>\n        <td mat-cell *matCellDef=\"let employee\"><button class=\"btn btn-danger\" (click)=\"deleteEmployee(employee)\"> Delete Employee</button> </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"footer\">\n</mat-card>\n<mat-card class=\"footer\">\n    <span style=\"font-size: smaller;text-align: center;\">    Claims Management System </span>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"min-height: 50px !important; height: 50px !important; position: relative; z-index: 5;\">\n    <mat-toolbar-row >\n        <span><a mat-button routerLink=\"/home\" style=\"font-size: large\"><span>Claims Management Portal</span></a></span>\n        <span class=\"example-fill-remaining-space\"></span>\n        <span class=\"align-center\"></span>\n        <span class=\"example-spacer\"></span>\n        <a mat-button routerLink=\"/home\" class=\"nav-link\"> <mat-icon>home</mat-icon></a>\n        <a mat-button *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"/\" class=\"nav-link\">LOGIN</a>\n        <a mat-button *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/logout\" class=\"nav-link\">LOGOUT</a>\n        <a mat-button routerLink=\"/aboutus\" class=\"nav-link\">ABOUT US</a>\n        <a mat-button routerLink=\"/admin\" class=\"nav-link\">ADMIN-MONITOR</a>\n    </mat-toolbar-row>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\">\n    <div>\n        User Name : <input type=\"text\" name=\"username\" [(ngModel)]=\"username\"> Password : <input type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n    </div>\n    <button (click)=checkLogin() class=\"btn btn-success\">\n    Login\n  </button>\n</div> -->\n<ng-container>\n    <div class=\"container banner\">\n        <div class=\"img avatar\">\n        </div>\n        <div class=\"login-content\">\n            <form>\n                <h2 class=\"title\">Member Login</h2>\n                <div class=\"input-div one\">\n                    <div class=\"i\">\n                        <i class=\"fas fa-user\"></i>\n                    </div>\n                    <div class=\"div\">\n                        <h5>Username</h5>\n                        <input type=\"text\" class=\"input\" name=\"username\" [(ngModel)]=\"username\" required>\n                    </div>\n                </div>\n                <div class=\"input-div pass\">\n                    <div class=\"i\">\n                        <i class=\"fas fa-lock\"></i>\n                    </div>\n                    <div class=\"div\">\n                        <h5>Password</h5>\n                        <input type=\"password\" class=\"input\" name=\"password\" [(ngModel)]=\"password\" required>\n                    </div>\n                </div>\n                <input type=\"submit\" class=\"btn mat-elevation-z5\" (click)=\"checkLogin()\" value=\"Login\">\n                <p *ngIf=\"hasError\" style=\"color: red; font-size: 15px; margin: auto;\" >\n                    {{ message }}\n                </p>\n            </form>\n           \n        </div>\n    </div>\n</ng-container>\n<!--\n<mat-card>\n    <mat-card-header>\n        <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <form>\n            <table class=\"example-full-width\" cellspacing=\"0\">\n                <tr>\n                    <td>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n                        </mat-form-field>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n                        </mat-form-field>\n                    </td>\n                </tr>\n                <p *ngIf=\"error\" class=\"error\">\n                    {{ error }}\n                </p>\n            </table>\n        </form>\n        <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-raised-button (click)=\"checkLogin()\" color=\"primary\">Login</button>\n    </mat-card-actions>\n</mat-card>\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  logout works!\n</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/add-employee/add-employee.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/add-employee/add-employee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.ts ***!
  \********************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddEmployeeComponent = class AddEmployeeComponent {
    constructor(httpClientService, router) {
        this.httpClientService = httpClientService;
        this.router = router;
        this.user = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["Employee"]("", "", "", "");
    }
    ngOnInit() { }
    createEmployee() {
        console.debug(this.user);
        this.httpClientService.createEmployee(this.user).subscribe(data => {
            alert("Employee created successfully.");
            this.router.navigate(['']);
        });
    }
};
AddEmployeeComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-employee",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-employee.component.css */ "./src/app/add-employee/add-employee.component.css")).default]
    })
], AddEmployeeComponent);



/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
        ],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/auth-gaurd.service */ "./src/app/service/auth-gaurd.service.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/member-home/member-home.component */ "./src/app/component/member-home/member-home.component.ts");
/* harmony import */ var _component_submit_claim_submit_claim_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/submit-claim/submit-claim.component */ "./src/app/component/submit-claim/submit-claim.component.ts");
/* harmony import */ var _component_view_claim_status_view_claim_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/view-claim-status/view-claim-status.component */ "./src/app/component/view-claim-status/view-claim-status.component.ts");
/* harmony import */ var _component_view_bill_details_view_bill_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/view-bill-details/view-bill-details.component */ "./src/app/component/view-bill-details/view-bill-details.component.ts");
/* harmony import */ var _component_policy_provider_details_policy_provider_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/policy-provider-details/policy-provider-details.component */ "./src/app/component/policy-provider-details/policy-provider-details.component.ts");
/* harmony import */ var _component_view_claim_status_result_view_claim_status_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/view-claim-status-result/view-claim-status-result.component */ "./src/app/component/view-claim-status-result/view-claim-status-result.component.ts");
/* harmony import */ var _component_view_bill_details_result_view_bill_details_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/view-bill-details-result/view-bill-details-result.component */ "./src/app/component/view-bill-details-result/view-bill-details-result.component.ts");
/* harmony import */ var _component_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/about-page/about-page.component */ "./src/app/component/about-page/about-page.component.ts");
/* harmony import */ var _component_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/admin-page/admin-page.component */ "./src/app/component/admin-page/admin-page.component.ts");
/* harmony import */ var _component_policy_provider_details_result_policy_provider_details_result_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/policy-provider-details-result/policy-provider-details-result.component */ "./src/app/component/policy-provider-details-result/policy-provider-details-result.component.ts");

















const routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'memberHome', component: _component_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_7__["MemberHomeComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'aboutus', component: _component_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_14__["AboutPageComponent"] },
    { path: 'admin', component: _component_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_15__["AdminPageComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'submitclaim', component: _component_submit_claim_submit_claim_component__WEBPACK_IMPORTED_MODULE_8__["SubmitClaimComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'viewclaimstatus', component: _component_view_claim_status_view_claim_status_component__WEBPACK_IMPORTED_MODULE_9__["ViewClaimStatusComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'viewclaimstatusresult', component: _component_view_claim_status_result_view_claim_status_result_component__WEBPACK_IMPORTED_MODULE_12__["ViewClaimStatusResultComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'viewbilldetails', component: _component_view_bill_details_view_bill_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewBillDetailsComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'viewbilldetailsresult', component: _component_view_bill_details_result_view_bill_details_result_component__WEBPACK_IMPORTED_MODULE_13__["ViewBillDetailsResultComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'policyproviderdetails', component: _component_policy_provider_details_policy_provider_details_component__WEBPACK_IMPORTED_MODULE_11__["PolicyProviderDetailsComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
    { path: 'policyproviderdetailsresult', component: _component_policy_provider_details_result_policy_provider_details_result_component__WEBPACK_IMPORTED_MODULE_16__["PolicyProviderDetailsResultComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-jwt';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "./src/app/add-employee/add-employee.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _service_basic_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/basic-auth-interceptor.service */ "./src/app/service/basic-auth-interceptor.service.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/member-home/member-home.component */ "./src/app/component/member-home/member-home.component.ts");
/* harmony import */ var _component_submit_claim_submit_claim_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/submit-claim/submit-claim.component */ "./src/app/component/submit-claim/submit-claim.component.ts");
/* harmony import */ var _component_view_claim_status_view_claim_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/view-claim-status/view-claim-status.component */ "./src/app/component/view-claim-status/view-claim-status.component.ts");
/* harmony import */ var _component_view_bill_details_view_bill_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/view-bill-details/view-bill-details.component */ "./src/app/component/view-bill-details/view-bill-details.component.ts");
/* harmony import */ var _component_policy_provider_details_policy_provider_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/policy-provider-details/policy-provider-details.component */ "./src/app/component/policy-provider-details/policy-provider-details.component.ts");
/* harmony import */ var _component_submit_claim_claim_dialog_claim_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/submit-claim/claim-dialog/claim-dialog.component */ "./src/app/component/submit-claim/claim-dialog/claim-dialog.component.ts");
/* harmony import */ var _component_view_claim_status_result_view_claim_status_result_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/view-claim-status-result/view-claim-status-result.component */ "./src/app/component/view-claim-status-result/view-claim-status-result.component.ts");
/* harmony import */ var _component_view_bill_details_result_view_bill_details_result_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/view-bill-details-result/view-bill-details-result.component */ "./src/app/component/view-bill-details-result/view-bill-details-result.component.ts");
/* harmony import */ var _component_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/about-page/about-page.component */ "./src/app/component/about-page/about-page.component.ts");
/* harmony import */ var _component_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/admin-page/admin-page.component */ "./src/app/component/admin-page/admin-page.component.ts");
/* harmony import */ var _component_policy_provider_details_result_policy_provider_details_result_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/policy-provider-details-result/policy-provider-details-result.component */ "./src/app/component/policy-provider-details-result/policy-provider-details-result.component.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"],
            _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_7__["AddEmployeeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _component_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
            _component_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_17__["MemberHomeComponent"],
            _component_submit_claim_submit_claim_component__WEBPACK_IMPORTED_MODULE_18__["SubmitClaimComponent"],
            _component_view_claim_status_view_claim_status_component__WEBPACK_IMPORTED_MODULE_19__["ViewClaimStatusComponent"],
            _component_view_bill_details_view_bill_details_component__WEBPACK_IMPORTED_MODULE_20__["ViewBillDetailsComponent"],
            _component_policy_provider_details_policy_provider_details_component__WEBPACK_IMPORTED_MODULE_21__["PolicyProviderDetailsComponent"],
            _component_policy_provider_details_result_policy_provider_details_result_component__WEBPACK_IMPORTED_MODULE_27__["PolicyProviderDetailsResultComponent"],
            _component_submit_claim_claim_dialog_claim_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ClaimDialogComponent"],
            _component_view_claim_status_result_view_claim_status_result_component__WEBPACK_IMPORTED_MODULE_23__["ViewClaimStatusResultComponent"],
            _component_view_bill_details_result_view_bill_details_result_component__WEBPACK_IMPORTED_MODULE_24__["ViewBillDetailsResultComponent"],
            _component_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_25__["AboutPageComponent"],
            _component_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_26__["AdminPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_13__["AngularMaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _service_basic_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["BasicAuthHtppInterceptorService"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_component_submit_claim_claim_dialog_claim_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ClaimDialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/about-page/about-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/about-page/about-page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n}\n\n.banner {\n  height: 89.7vh;\n  background: url('wave.png');\n  background-color: white;\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  color: #414a4c;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.center-card {\n  width: 97%;\n  text-align: center;\n  color: rgba(255, 250, 250, 0.548);\n}\n\n.example-card {\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n  display: block;\n  text-align: center;\n}\n\n.btn-right {\n  display: flex;\n  direction: rtl;\n}\n\n.form-card {\n  width: 50%;\n  background-color: #f4fffd;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Fib3V0LXBhZ2UvRDpcXENUU1xcbWZwZS1wcm9qZWN0XFxhbmd1bGFyOC1zcHJpbmctYm9vdC1qd3QtbWFzdGVyLW1hc3RlclxcYW5ndWxhcjgtc3ByaW5nLWJvb3Qtand0LW1hc3Rlci1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudFxcYWJvdXQtcGFnZVxcYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUNDSjs7QURDQTtFQUVJLGNBQUE7RUFDSCwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDRyx5QkFBQTtFQUNBLDRCQUFBO0VBQ0gsY0FBQTtFQUNHLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURDQTtFQUNJLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDS0o7O0FERkE7RUFDQSxXQUFBO0FDS0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46MDtcbn1cbi5iYW5uZXIge1xuXHRcbiAgICBoZWlnaHQ6IDg5Ljd2aDtcblx0YmFja2dyb3VuZDp1cmwoc3JjXFxhc3NldHNcXGltYWdlc1xcd2F2ZS5wbmcpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0Y29sb3I6XHQjNDE0YTRjO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2VudGVyLWNhcmR7XG4gICAgd2lkdGg6IDk3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTAsIDI1MCwgMC41NDgpO1xufVxuLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuLXJpZ2h0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlyZWN0aW9uOiBydGw7XG59XG4uZm9ybS1jYXJke1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjRmZmZkO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbndpZHRoOiAxMDAlO1xufSIsIioge1xuICBtYXJnaW46IDA7XG59XG5cbi5iYW5uZXIge1xuICBoZWlnaHQ6IDg5Ljd2aDtcbiAgYmFja2dyb3VuZDogdXJsKHNyY1xcYXNzZXRzXFxpbWFnZXNcXHdhdmUucG5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6ICM0MTRhNGM7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2VudGVyLWNhcmQge1xuICB3aWR0aDogOTclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjUwLCAyNTAsIDAuNTQ4KTtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogbWluLWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxuLmZvcm0tY2FyZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGZmZmQ7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/about-page/about-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/about-page/about-page.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutPageComponent = class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-page/about-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-page.component.scss */ "./src/app/component/about-page/about-page.component.scss")).default]
    })
], AboutPageComponent);



/***/ }),

/***/ "./src/app/component/admin-page/admin-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/admin-page/admin-page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n}\n\n.banner {\n  height: 89.7vh;\n  background: url('wave.png');\n  background-color: white;\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  color: #414a4c;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.center-card {\n  width: 97%;\n  text-align: center;\n  color: rgba(255, 250, 250, 0.548);\n}\n\n.example-card {\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n  display: block;\n  text-align: center;\n}\n\n.btn-right {\n  display: flex;\n  direction: rtl;\n}\n\n.form-card {\n  width: 50%;\n  background-color: #f4fffd;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkbWluLXBhZ2UvRDpcXENUU1xcbWZwZS1wcm9qZWN0XFxhbmd1bGFyOC1zcHJpbmctYm9vdC1qd3QtbWFzdGVyLW1hc3RlclxcYW5ndWxhcjgtc3ByaW5nLWJvb3Qtand0LW1hc3Rlci1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudFxcYWRtaW4tcGFnZVxcYWRtaW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2FkbWluLXBhZ2UvYWRtaW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUNDSjs7QURDQTtFQUVJLGNBQUE7RUFDSCwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDRyx5QkFBQTtFQUNBLDRCQUFBO0VBQ0gsY0FBQTtFQUNHLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURDQTtFQUNJLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDS0o7O0FERkE7RUFDQSxXQUFBO0FDS0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46MDtcbn1cbi5iYW5uZXIge1xuXHRcbiAgICBoZWlnaHQ6IDg5Ljd2aDtcblx0YmFja2dyb3VuZDp1cmwoc3JjXFxhc3NldHNcXGltYWdlc1xcd2F2ZS5wbmcpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0Y29sb3I6XHQjNDE0YTRjO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2VudGVyLWNhcmR7XG4gICAgd2lkdGg6IDk3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTAsIDI1MCwgMC41NDgpO1xufVxuLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuLXJpZ2h0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlyZWN0aW9uOiBydGw7XG59XG4uZm9ybS1jYXJke1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjRmZmZkO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbndpZHRoOiAxMDAlO1xufSIsIioge1xuICBtYXJnaW46IDA7XG59XG5cbi5iYW5uZXIge1xuICBoZWlnaHQ6IDg5Ljd2aDtcbiAgYmFja2dyb3VuZDogdXJsKHNyY1xcYXNzZXRzXFxpbWFnZXNcXHdhdmUucG5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6ICM0MTRhNGM7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2VudGVyLWNhcmQge1xuICB3aWR0aDogOTclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjUwLCAyNTAsIDAuNTQ4KTtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogbWluLWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxuLmZvcm0tY2FyZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGZmZmQ7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/admin-page/admin-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/admin-page/admin-page.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminPageComponent = class AdminPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin-page/admin-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-page.component.scss */ "./src/app/component/admin-page/admin-page.component.scss")).default]
    })
], AdminPageComponent);



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n\t\n    height: 89.7vh;\n\tbackground:url('wave.png');\n\tbackground-color: white;\n\tbackground-size: contain;\n    background-position: left;\n    background-repeat: no-repeat;\n\tcolor:\t#414a4c;\n}\nbutton{\n    width:200px;\n}\n.example-card {\n    margin: auto;\n    max-width: -webkit-min-content;\n    max-width: -moz-min-content;\n    max-width: min-content;\n    display: block;\n    text-align: center;\n}\n.text-center{\n    text-align: center;\n    padding-left: 20%;\n    padding-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7Q0FDakIsMEJBQTBDO0NBQzFDLHVCQUF1QjtDQUN2Qix3QkFBd0I7SUFDckIseUJBQXlCO0lBQ3pCLDRCQUE0QjtDQUMvQixjQUFjO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUFzQjtJQUF0QiwyQkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XG5cdFxuICAgIGhlaWdodDogODkuN3ZoO1xuXHRiYWNrZ3JvdW5kOnVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRjb2xvcjpcdCM0MTRhNGM7XG59XG5idXR0b257XG4gICAgd2lkdGg6MjAwcHg7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgIHBhZGRpbmctdG9wOiAxNSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/component/member-home/member-home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/member-home/member-home.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n    margin:0;\n}\n.banner {\n\t\n    height: 89.7vh;\n\tbackground:url('wave.png');\n\tbackground-color: white;\n\tbackground-size: contain;\n    background-position: left;\n    background-repeat: no-repeat;\n\tcolor:\t#414a4c;\n}\nbutton{\n    width:200px;\n}\n.example-card {\n    max-width: -webkit-min-content;\n    max-width: -moz-min-content;\n    max-width: min-content;\n    display: block;\n    text-align: center;\n}\n.center-card{\n    margin-top: 5%;\n    margin: auto;\n    max-width: 97%;\n    text-align: center;\n    color: rgba(0, 0, 0, 0.548);\n}\n.text-center{\n    border: #414a4c;\n    border-radius: 15px;\n    margin-top: 5%;\n    text-align: start;\n    margin-left: auto;\n    margin-right: auto;\n    width: 700px;\n    -webkit-border-radius: 15px;\n    -moz-border-radius: 15px;\n    -ms-border-radius: 15px;\n    -o-border-radius: 15px;\n}\n.example-container {\n    display: flex;\n    flex-direction: column;\n  }\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lbWJlci1ob21lL21lbWJlci1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0FBQ1o7QUFDQTs7SUFFSSxjQUFjO0NBQ2pCLDBCQUEwQztDQUMxQyx1QkFBdUI7Q0FDdkIsd0JBQXdCO0lBQ3JCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7Q0FDL0IsY0FBYztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDhCQUFzQjtJQUF0QiwyQkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWVtYmVyLWhvbWUvbWVtYmVyLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOjA7XG59XG4uYmFubmVyIHtcblx0XG4gICAgaGVpZ2h0OiA4OS43dmg7XG5cdGJhY2tncm91bmQ6dXJsKHNyY1xcYXNzZXRzXFxpbWFnZXNcXHdhdmUucG5nKTtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGNvbG9yOlx0IzQxNGE0Yztcbn1cbmJ1dHRvbntcbiAgICB3aWR0aDoyMDBweDtcbn1cbi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNlbnRlci1jYXJke1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDk3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NDgpO1xufVxuLnRleHQtY2VudGVye1xuICAgIGJvcmRlcjogIzQxNGE0YztcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4iXX0= */");

/***/ }),

/***/ "./src/app/component/member-home/member-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/member-home/member-home.component.ts ***!
  \****************************************************************/
/*! exports provided: MemberHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberHomeComponent", function() { return MemberHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MemberHomeComponent = class MemberHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
MemberHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/member-home/member-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-home.component.css */ "./src/app/component/member-home/member-home.component.css")).default]
    })
], MemberHomeComponent);



/***/ }),

/***/ "./src/app/component/policy-provider-details-result/policy-provider-details-result.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/component/policy-provider-details-result/policy-provider-details-result.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  overflow: auto;\n  max-height: 400px;\n}\n\np {\n  font-family: Lato;\n}\n\n* {\n  margin: 0;\n}\n\n.banner {\n  height: 89.7vh;\n  background: url('wave.png');\n  background-color: white;\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  color: #414a4c;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.center-card {\n  width: 97%;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.548);\n}\n\n.example-card {\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n  display: block;\n  text-align: center;\n}\n\n.btn-right {\n  display: flex;\n  direction: rtl;\n}\n\n.form-card {\n  width: 50%;\n  background-color: #f7f7f7;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3BvbGljeS1wcm92aWRlci1kZXRhaWxzLXJlc3VsdC9EOlxcQ1RTXFxtZnBlLXByb2plY3RcXGFuZ3VsYXI4LXNwcmluZy1ib290LWp3dC1tYXN0ZXItbWFzdGVyXFxhbmd1bGFyOC1zcHJpbmctYm9vdC1qd3QtbWFzdGVyLW1hc3Rlci9zcmNcXGFwcFxcY29tcG9uZW50XFxwb2xpY3ktcHJvdmlkZXItZGV0YWlscy1yZXN1bHRcXHBvbGljeS1wcm92aWRlci1kZXRhaWxzLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3BvbGljeS1wcm92aWRlci1kZXRhaWxzLXJlc3VsdC9wb2xpY3ktcHJvdmlkZXItZGV0YWlscy1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxTQUFBO0FDRUo7O0FEQUE7RUFFSSxjQUFBO0VBQ0gsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0cseUJBQUE7RUFDQSw0QkFBQTtFQUNILGNBQUE7RUFDRyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUE7RUFDSSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDTUo7O0FESEE7RUFDSSxXQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcG9saWN5LXByb3ZpZGVyLWRldGFpbHMtcmVzdWx0L3BvbGljeS1wcm92aWRlci1kZXRhaWxzLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xufVxuICBwIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgfVxuXG4qe1xuICAgIG1hcmdpbjowO1xufVxuLmJhbm5lciB7XG5cdFxuICAgIGhlaWdodDogODkuN3ZoO1xuXHRiYWNrZ3JvdW5kOnVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRjb2xvcjpcdCM0MTRhNGM7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jZW50ZXItY2FyZHtcbiAgICB3aWR0aDogOTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG4tcmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbn1cbi5mb3JtLWNhcmR7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gIFxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiA4OS43dmg7XG4gIGJhY2tncm91bmQ6IHVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjNDE0YTRjO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNlbnRlci1jYXJkIHtcbiAgd2lkdGg6IDk3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5mb3JtLWNhcmQge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/policy-provider-details-result/policy-provider-details-result.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/component/policy-provider-details-result/policy-provider-details-result.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PolicyProviderDetailsResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyProviderDetailsResultComponent", function() { return PolicyProviderDetailsResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let PolicyProviderDetailsResultComponent = class PolicyProviderDetailsResultComponent {
    constructor() {
        this.displayedColumns = ['providername', 'location'];
        this.result = [];
    }
    ngOnInit() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](history.state.data);
    }
};
PolicyProviderDetailsResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-policy-provider-details-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./policy-provider-details-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/policy-provider-details-result/policy-provider-details-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./policy-provider-details-result.component.scss */ "./src/app/component/policy-provider-details-result/policy-provider-details-result.component.scss")).default]
    })
], PolicyProviderDetailsResultComponent);



/***/ }),

/***/ "./src/app/component/policy-provider-details/policy-provider-details.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/component/policy-provider-details/policy-provider-details.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n}\n\n.banner {\n  height: 89.7vh;\n  background: url('wave.png');\n  background-color: white;\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  color: #414a4c;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.center-card {\n  width: 97%;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.548);\n}\n\n.example-card {\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n  display: block;\n  text-align: center;\n}\n\n.btn-right {\n  float: right;\n}\n\n.form-card {\n  width: 50%;\n  background-color: #f7f7f7;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3BvbGljeS1wcm92aWRlci1kZXRhaWxzL0Q6XFxDVFNcXG1mcGUtcHJvamVjdFxcYW5ndWxhcjgtc3ByaW5nLWJvb3Qtand0LW1hc3Rlci1tYXN0ZXJcXGFuZ3VsYXI4LXNwcmluZy1ib290LWp3dC1tYXN0ZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRcXHBvbGljeS1wcm92aWRlci1kZXRhaWxzXFxwb2xpY3ktcHJvdmlkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3BvbGljeS1wcm92aWRlci1kZXRhaWxzL3BvbGljeS1wcm92aWRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBRENBO0VBRUksY0FBQTtFQUNILDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDSCxjQUFBO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREZBO0VBQ0EsV0FBQTtBQ0tBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3BvbGljeS1wcm92aWRlci1kZXRhaWxzL3BvbGljeS1wcm92aWRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46MDtcbn1cbi5iYW5uZXIge1xuXHRcbiAgICBoZWlnaHQ6IDg5Ljd2aDtcblx0YmFja2dyb3VuZDp1cmwoc3JjXFxhc3NldHNcXGltYWdlc1xcd2F2ZS5wbmcpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0Y29sb3I6XHQjNDE0YTRjO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2VudGVyLWNhcmR7XG4gICAgd2lkdGg6IDk3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NDgpO1xufVxuLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuLXJpZ2h0e1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuLmZvcm0tY2FyZHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG53aWR0aDogMTAwJTtcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiA4OS43dmg7XG4gIGJhY2tncm91bmQ6IHVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjNDE0YTRjO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNlbnRlci1jYXJkIHtcbiAgd2lkdGg6IDk3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZm9ybS1jYXJkIHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/policy-provider-details/policy-provider-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/policy-provider-details/policy-provider-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PolicyProviderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyProviderDetailsComponent", function() { return PolicyProviderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/member.service */ "./src/app/service/member.service.ts");




let PolicyProviderDetailsComponent = class PolicyProviderDetailsComponent {
    constructor(memberService, router) {
        this.memberService = memberService;
        this.router = router;
        this.policyId = null;
        this.hasError = false;
    }
    ngOnInit() {
    }
    submitPolicyId() {
        if (this.policyId == null) {
            this.hasError = true;
            this.message = "fill all the fields *";
            return;
        }
        else {
            this.hasError = false;
        }
        this.memberService.getProviderDetails(this.policyId).subscribe(response => {
            let res = response;
            this.router.navigateByUrl('/policyproviderdetailsresult', { state: { data: res } });
        }, error => {
            this.message = error.error.message;
            this.hasError = true;
        });
    }
};
PolicyProviderDetailsComponent.ctorParameters = () => [
    { type: src_app_service_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PolicyProviderDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-policy-provider-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./policy-provider-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/policy-provider-details/policy-provider-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./policy-provider-details.component.scss */ "./src/app/component/policy-provider-details/policy-provider-details.component.scss")).default]
    })
], PolicyProviderDetailsComponent);



/***/ }),

/***/ "./src/app/component/submit-claim/claim-dialog/claim-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/component/submit-claim/claim-dialog/claim-dialog.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-right{\n    display: flex;\n    direction: rtl;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N1Ym1pdC1jbGFpbS9jbGFpbS1kaWFsb2cvY2xhaW0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zdWJtaXQtY2xhaW0vY2xhaW0tZGlhbG9nL2NsYWltLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1yaWdodHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpcmVjdGlvbjogcnRsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/submit-claim/claim-dialog/claim-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/submit-claim/claim-dialog/claim-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClaimDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimDialogComponent", function() { return ClaimDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ClaimDialogComponent = class ClaimDialogComponent {
    constructor(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
    }
    onOkClick() {
        this.dialogRef.close();
        this.router.navigate(["/memberHome"]);
    }
};
ClaimDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ClaimDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-claim-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./claim-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/submit-claim/claim-dialog/claim-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./claim-dialog.component.css */ "./src/app/component/submit-claim/claim-dialog/claim-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ClaimDialogComponent);



/***/ }),

/***/ "./src/app/component/submit-claim/submit-claim.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/submit-claim/submit-claim.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n    margin:0;\n}\n.banner {\n\t\n    height: 89.7vh;\n\tbackground:url('wave.png');\n\tbackground-color: white;\n\tbackground-size: contain;\n    background-position: left;\n    background-repeat: no-repeat;\n\tcolor:\t#414a4c;\n    align-items: center;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.center-card{\n    width: 97%;\n    text-align: center;\n    color: rgba(0, 0, 0, 0.548);\n}\n.example-card {\n    max-width: -webkit-min-content;\n    max-width: -moz-min-content;\n    max-width: min-content;\n    display: block;\n    text-align: center;\n}\n.btn-right{\n    display: flex;\n    direction: rtl;\n}\n.form-card{\n    width: 50%;\n    background-color:#f7f7f7;\n}\n.example-container {\n    display: flex;\n    flex-direction: column;\n  }\n.example-container > * {\nwidth: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N1Ym1pdC1jbGFpbS9zdWJtaXQtY2xhaW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7QUFDWjtBQUNBOztJQUVJLGNBQWM7Q0FDakIsMEJBQTBDO0NBQzFDLHVCQUF1QjtDQUN2Qix3QkFBd0I7SUFDckIseUJBQXlCO0lBQ3pCLDRCQUE0QjtDQUMvQixjQUFjO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFFRjtBQUNBLFdBQVc7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zdWJtaXQtY2xhaW0vc3VibWl0LWNsYWltLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjowO1xufVxuLmJhbm5lciB7XG5cdFxuICAgIGhlaWdodDogODkuN3ZoO1xuXHRiYWNrZ3JvdW5kOnVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRjb2xvcjpcdCM0MTRhNGM7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jZW50ZXItY2FyZHtcbiAgICB3aWR0aDogOTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG4tcmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbn1cbi5mb3JtLWNhcmR7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xud2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/submit-claim/submit-claim.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/submit-claim/submit-claim.component.ts ***!
  \******************************************************************/
/*! exports provided: SubmitClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitClaimComponent", function() { return SubmitClaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/member.service */ "./src/app/service/member.service.ts");
/* harmony import */ var _claim_dialog_claim_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claim-dialog/claim-dialog.component */ "./src/app/component/submit-claim/claim-dialog/claim-dialog.component.ts");






let SubmitClaimComponent = class SubmitClaimComponent {
    constructor(memberService, router, dialog) {
        this.memberService = memberService;
        this.router = router;
        this.dialog = dialog;
        this.memberSubmitClaim = {
            claimsId: null,
            memberId: null,
            policyId: null,
            hospitalId: null,
            totalClaimedAmt: null,
            totalBill: null
        };
        this.str = null;
        this.hasError = false;
    }
    ngOnInit() {
    }
    submitMemberClaim() {
        if (this.memberSubmitClaim.memberId == null || this.memberSubmitClaim.policyId == null ||
            this.memberSubmitClaim.hospitalId == null || this.memberSubmitClaim.totalClaimedAmt == null ||
            this.memberSubmitClaim.totalBill == null) {
            this.hasError = true;
            return;
        }
        else {
            this.hasError = false;
        }
        this.memberService.submitMemberClaim(this.memberSubmitClaim).subscribe(data => {
            this.str = data.claimsId;
            this.openDialog();
        });
    }
    openDialog() {
        let dialogRef = this.dialog.open(_claim_dialog_claim_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ClaimDialogComponent"], {
            width: '400px',
            data: { claimsId: this.str }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
SubmitClaimComponent.ctorParameters = () => [
    { type: _service_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
SubmitClaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submit-claim',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./submit-claim.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/submit-claim/submit-claim.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./submit-claim.component.css */ "./src/app/component/submit-claim/submit-claim.component.css")).default]
    })
], SubmitClaimComponent);



/***/ }),

/***/ "./src/app/component/view-bill-details-result/view-bill-details-result.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/component/view-bill-details-result/view-bill-details-result.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  overflow: auto;\n  max-height: 400px;\n}\n\np {\n  font-family: Lato;\n}\n\n* {\n  margin: 0;\n}\n\n.banner {\n  height: 89.7vh;\n  background: url('wave.png');\n  background-color: white;\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  color: #414a4c;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.center-card {\n  width: 97%;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.548);\n}\n\n.example-card {\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n  display: block;\n  text-align: center;\n}\n\n.btn-right {\n  display: flex;\n  direction: rtl;\n}\n\n.form-card {\n  width: 50%;\n  background-color: #f7f7f7;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ZpZXctYmlsbC1kZXRhaWxzLXJlc3VsdC9EOlxcQ1RTXFxtZnBlLXByb2plY3RcXGFuZ3VsYXI4LXNwcmluZy1ib290LWp3dC1tYXN0ZXItbWFzdGVyXFxhbmd1bGFyOC1zcHJpbmctYm9vdC1qd3QtbWFzdGVyLW1hc3Rlci9zcmNcXGFwcFxcY29tcG9uZW50XFx2aWV3LWJpbGwtZGV0YWlscy1yZXN1bHRcXHZpZXctYmlsbC1kZXRhaWxzLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3ZpZXctYmlsbC1kZXRhaWxzLXJlc3VsdC92aWV3LWJpbGwtZGV0YWlscy1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxTQUFBO0FDRUo7O0FEQUE7RUFFSSxjQUFBO0VBQ0gsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0cseUJBQUE7RUFDQSw0QkFBQTtFQUNILGNBQUE7RUFDRyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUE7RUFDSSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDTUo7O0FESEE7RUFDSSxXQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdmlldy1iaWxsLWRldGFpbHMtcmVzdWx0L3ZpZXctYmlsbC1kZXRhaWxzLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xufVxuICBwIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgfVxuXG4qe1xuICAgIG1hcmdpbjowO1xufVxuLmJhbm5lciB7XG5cdFxuICAgIGhlaWdodDogODkuN3ZoO1xuXHRiYWNrZ3JvdW5kOnVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRjb2xvcjpcdCM0MTRhNGM7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jZW50ZXItY2FyZHtcbiAgICB3aWR0aDogOTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG4tcmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbn1cbi5mb3JtLWNhcmR7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gIFxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiA4OS43dmg7XG4gIGJhY2tncm91bmQ6IHVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjNDE0YTRjO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNlbnRlci1jYXJkIHtcbiAgd2lkdGg6IDk3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5mb3JtLWNhcmQge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/view-bill-details-result/view-bill-details-result.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/component/view-bill-details-result/view-bill-details-result.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewBillDetailsResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBillDetailsResultComponent", function() { return ViewBillDetailsResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ViewBillDetailsResultComponent = class ViewBillDetailsResultComponent {
    constructor() {
        this.displayedColumns = ['memberid', 'policyid', 'lastdate', 'lastdue', 'lastpay', 'duedate'];
        this.result = [];
    }
    ngOnInit() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](history.state.data);
    }
};
ViewBillDetailsResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-bill-details-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-bill-details-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-bill-details-result/view-bill-details-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-bill-details-result.component.scss */ "./src/app/component/view-bill-details-result/view-bill-details-result.component.scss")).default]
    })
], ViewBillDetailsResultComponent);



/***/ }),

/***/ "./src/app/component/view-bill-details/view-bill-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/component/view-bill-details/view-bill-details.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n}\n\n.banner {\n  height: 89.7vh;\n  background: url('wave.png');\n  background-color: white;\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  color: #414a4c;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.center-card {\n  width: 97%;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.548);\n}\n\n.example-card {\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n  display: block;\n  text-align: center;\n}\n\n.btn-right {\n  float: right;\n}\n\n.form-card {\n  width: 50%;\n  background-color: #f7f7f7;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ZpZXctYmlsbC1kZXRhaWxzL0Q6XFxDVFNcXG1mcGUtcHJvamVjdFxcYW5ndWxhcjgtc3ByaW5nLWJvb3Qtand0LW1hc3Rlci1tYXN0ZXJcXGFuZ3VsYXI4LXNwcmluZy1ib290LWp3dC1tYXN0ZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRcXHZpZXctYmlsbC1kZXRhaWxzXFx2aWV3LWJpbGwtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3ZpZXctYmlsbC1kZXRhaWxzL3ZpZXctYmlsbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNILDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDSCxjQUFBO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ01KOztBREhBO0VBQ0EsV0FBQTtBQ01BIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3ZpZXctYmlsbC1kZXRhaWxzL3ZpZXctYmlsbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46MDtcbn1cbi5iYW5uZXIge1xuICAgIGhlaWdodDogODkuN3ZoO1xuXHRiYWNrZ3JvdW5kOnVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRjb2xvcjpcdCM0MTRhNGM7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jZW50ZXItY2FyZHtcbiAgICB3aWR0aDogOTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG4tcmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmZvcm0tY2FyZHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG53aWR0aDogMTAwJTtcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiA4OS43dmg7XG4gIGJhY2tncm91bmQ6IHVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjNDE0YTRjO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNlbnRlci1jYXJkIHtcbiAgd2lkdGg6IDk3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZm9ybS1jYXJkIHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/view-bill-details/view-bill-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/view-bill-details/view-bill-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewBillDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBillDetailsComponent", function() { return ViewBillDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/member.service */ "./src/app/service/member.service.ts");




let ViewBillDetailsComponent = class ViewBillDetailsComponent {
    constructor(memberService, router) {
        this.memberService = memberService;
        this.router = router;
        this.billDetail = {
            memberId: null,
            policyId: null
        };
        this.result = null;
        this.hasError = false;
    }
    ngOnInit() {
    }
    submitBillDetail() {
        if (this.billDetail.memberId == null || this.billDetail.policyId == null) {
            this.hasError = true;
            this.message = "fill all the fields *";
            return;
        }
        else {
            this.hasError = false;
        }
        this.memberService.getBillDetails(this.billDetail).subscribe(response => {
            let res = response;
            this.router.navigateByUrl('/viewbilldetailsresult', { state: { data: res } });
        }, error => {
            this.message = error.error.message;
            this.hasError = true;
        });
    }
};
ViewBillDetailsComponent.ctorParameters = () => [
    { type: src_app_service_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ViewBillDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-bill-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-bill-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-bill-details/view-bill-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-bill-details.component.scss */ "./src/app/component/view-bill-details/view-bill-details.component.scss")).default]
    })
], ViewBillDetailsComponent);



/***/ }),

/***/ "./src/app/component/view-claim-status-result/view-claim-status-result.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/component/view-claim-status-result/view-claim-status-result.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  overflow: auto;\n  max-height: 300px;\n}\n\np {\n  font-family: Lato;\n}\n\n* {\n  margin: 0;\n}\n\n.banner {\n  height: 89.7vh;\n  background: url('wave.png');\n  background-color: white;\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  color: #414a4c;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.center-card {\n  width: 97%;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.548);\n}\n\n.example-card {\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n  display: block;\n  text-align: center;\n}\n\n.btn-right {\n  display: flex;\n  direction: rtl;\n}\n\n.form-card {\n  width: 50%;\n  background-color: #f7f7f7;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ZpZXctY2xhaW0tc3RhdHVzLXJlc3VsdC9EOlxcQ1RTXFxtZnBlLXByb2plY3RcXGFuZ3VsYXI4LXNwcmluZy1ib290LWp3dC1tYXN0ZXItbWFzdGVyXFxhbmd1bGFyOC1zcHJpbmctYm9vdC1qd3QtbWFzdGVyLW1hc3Rlci9zcmNcXGFwcFxcY29tcG9uZW50XFx2aWV3LWNsYWltLXN0YXR1cy1yZXN1bHRcXHZpZXctY2xhaW0tc3RhdHVzLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3ZpZXctY2xhaW0tc3RhdHVzLXJlc3VsdC92aWV3LWNsYWltLXN0YXR1cy1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxTQUFBO0FDRUo7O0FEQUE7RUFFSSxjQUFBO0VBQ0gsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0cseUJBQUE7RUFDQSw0QkFBQTtFQUNILGNBQUE7RUFDRyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUE7RUFDSSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDTUo7O0FESEE7RUFDSSxXQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdmlldy1jbGFpbS1zdGF0dXMtcmVzdWx0L3ZpZXctY2xhaW0tc3RhdHVzLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuICBwIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgfVxuXG4qe1xuICAgIG1hcmdpbjowO1xufVxuLmJhbm5lciB7XG5cdFxuICAgIGhlaWdodDogODkuN3ZoO1xuXHRiYWNrZ3JvdW5kOnVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRjb2xvcjpcdCM0MTRhNGM7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jZW50ZXItY2FyZHtcbiAgICB3aWR0aDogOTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG4tcmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbn1cbi5mb3JtLWNhcmR7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gIFxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiA4OS43dmg7XG4gIGJhY2tncm91bmQ6IHVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjNDE0YTRjO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNlbnRlci1jYXJkIHtcbiAgd2lkdGg6IDk3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5mb3JtLWNhcmQge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/view-claim-status-result/view-claim-status-result.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/component/view-claim-status-result/view-claim-status-result.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewClaimStatusResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClaimStatusResultComponent", function() { return ViewClaimStatusResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ViewClaimStatusResultComponent = class ViewClaimStatusResultComponent {
    constructor() {
        this.displayedColumns = ['claimid', 'memberid', 'claimstatus', 'claimdesc'];
        this.result = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.result);
    }
    ngOnInit() {
        this.result.push(history.state.data);
    }
};
ViewClaimStatusResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-claim-status-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-claim-status-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-claim-status-result/view-claim-status-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-claim-status-result.component.scss */ "./src/app/component/view-claim-status-result/view-claim-status-result.component.scss")).default]
    })
], ViewClaimStatusResultComponent);



/***/ }),

/***/ "./src/app/component/view-claim-status/view-claim-status.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/component/view-claim-status/view-claim-status.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n}\n\n.banner {\n  height: 89.7vh;\n  background: url('wave.png');\n  background-color: white;\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  color: #414a4c;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.center-card {\n  width: 97%;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.548);\n}\n\n.example-card {\n  max-width: -webkit-min-content;\n  max-width: -moz-min-content;\n  max-width: min-content;\n  display: block;\n  text-align: center;\n}\n\n.btn-right {\n  float: right;\n}\n\n.form-card {\n  width: 50%;\n  background-color: #f7f7f7;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ZpZXctY2xhaW0tc3RhdHVzL0Q6XFxDVFNcXG1mcGUtcHJvamVjdFxcYW5ndWxhcjgtc3ByaW5nLWJvb3Qtand0LW1hc3Rlci1tYXN0ZXJcXGFuZ3VsYXI4LXNwcmluZy1ib290LWp3dC1tYXN0ZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRcXHZpZXctY2xhaW0tc3RhdHVzXFx2aWV3LWNsYWltLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3ZpZXctY2xhaW0tc3RhdHVzL3ZpZXctY2xhaW0tc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNILDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDSCxjQUFBO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ01KOztBREhBO0VBQ0EsV0FBQTtBQ01BIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3ZpZXctY2xhaW0tc3RhdHVzL3ZpZXctY2xhaW0tc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46MDtcbn1cbi5iYW5uZXIge1xuICAgIGhlaWdodDogODkuN3ZoO1xuXHRiYWNrZ3JvdW5kOnVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRjb2xvcjpcdCM0MTRhNGM7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jZW50ZXItY2FyZHtcbiAgICB3aWR0aDogOTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG4tcmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmZvcm0tY2FyZHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG53aWR0aDogMTAwJTtcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiA4OS43dmg7XG4gIGJhY2tncm91bmQ6IHVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YXZlLnBuZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjNDE0YTRjO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNlbnRlci1jYXJkIHtcbiAgd2lkdGg6IDk3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZm9ybS1jYXJkIHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/view-claim-status/view-claim-status.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/view-claim-status/view-claim-status.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewClaimStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClaimStatusComponent", function() { return ViewClaimStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/member.service */ "./src/app/service/member.service.ts");




let ViewClaimStatusComponent = class ViewClaimStatusComponent {
    constructor(memberService, router) {
        this.memberService = memberService;
        this.router = router;
        this.memberSubmitClaim = {
            claimsId: null,
            memberId: null,
            policyId: null,
            hospitalId: null,
            totalClaimedAmt: null,
            totalBill: null
        };
        this.hasError = false;
    }
    ngOnInit() {
    }
    submitMemberClaimDetail() {
        if (this.memberSubmitClaim.memberId == null || this.memberSubmitClaim.policyId == null ||
            this.memberSubmitClaim.claimsId == null) {
            this.message = "fill all the fields *";
            this.hasError = true;
            return;
        }
        else {
            this.hasError = false;
        }
        this.memberService.getClaimStatus(this.memberSubmitClaim).subscribe(data => {
            let result = {
                claimId: data.claimId,
                memberId: data.memberId,
                claimStatus: data.claimStatus,
                claimDesc: data.claimDesc
            };
            this.router.navigateByUrl('/viewclaimstatusresult', { state: { data: result } });
        }, error => {
            this.message = error.error.message;
            this.hasError = true;
        });
    }
};
ViewClaimStatusComponent.ctorParameters = () => [
    { type: src_app_service_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ViewClaimStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-claim-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-claim-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/view-claim-status/view-claim-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-claim-status.component.scss */ "./src/app/component/view-claim-status/view-claim-status.component.scss")).default]
    })
], ViewClaimStatusComponent);



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");



let EmployeeComponent = class EmployeeComponent {
    constructor(httpClientService) {
        this.httpClientService = httpClientService;
        this.displayedColumns = ["name", "designation", "delete"];
    }
    ngOnInit() {
        this.httpClientService
            .getEmployees()
            .subscribe(response => this.handleSuccessfulResponse(response));
    }
    handleSuccessfulResponse(response) {
        this.employees = response;
    }
    deleteEmployee(employee) {
        this.httpClientService.deleteEmployee(employee).subscribe(data => {
            this.employees = this.employees.filter(u => u !== employee);
        });
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
];
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-employee",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")).default]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n    position: fixed;\n    bottom: 0;\n    height: 10px;\n    width: 99%;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA5OSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: flex;\n    justify-content: center;\n    margin: 100px 0px;\n}\n*{\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n.wave{\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\theight: 100%;\n\tz-index: -1;\n}\n.container{\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap :7rem;\n    padding: 0 0rem;\n}\n.img{\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n.login-content{\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\ttext-align: center;\n}\n.img img{\n\twidth: 500px;\n}\nform{\n\twidth: 360px;\n}\n.login-content img{\n    height: 100px;\n}\n.login-content h2{\n\tmargin: 15px 0;\n\tcolor: #333;\n\ttext-transform: uppercase;\n\tfont-size: 2.1rem;\n}\n.login-content .input-div{\n\tposition: relative;\n    display: grid;\n    grid-template-columns: 7% 93%;\n    margin: 25px 0;\n    padding: 5px 0;\n    border-bottom: 2px solid #d9d9d9;\n}\n.login-content .input-div.one{\n\tmargin-top: 0;\n}\n.i{\n\tcolor: #d9d9d9;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n.i i{\n\ttransition: .3s;\n\t-webkit-transition: .3s;\n\t-moz-transition: .3s;\n\t-ms-transition: .3s;\n\t-o-transition: .3s;\n}\n.input-div > div{\n    position: relative;\n\theight: 45px;\n}\n.input-div > div > h5{\n\tposition: absolute;\n\tleft: 10px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tcolor: #999;\n\tfont-size: 15px;\n\ttransition: .3s;\n\t-webkit-transform: translateY(-50%);\n\t-moz-transform: translateY(-50%);\n\t-ms-transform: translateY(-50%);\n\t-o-transform: translateY(-50%);\n}\n.input-div:before, .input-div:after{\n\tcontent: '';\n\tposition: absolute;\n\tbottom: -2px;\n\twidth: 0%;\n\theight: 2px;\n\tbackground-color: #38d39f;\n\ttransition: .4s;\n}\n.input-div:before{\n\tright: 50%;\n}\n.input-div:after{\n\tleft: 50%;\n}\n.input-div.focus:before, .input-div.focus:after{\n\twidth: 50%;\n}\n.input-div.focus > div > h5{\n\ttop: -5px;\n\tfont-size: 12px;\n}\n.input-div.focus > .i > i{\n\tcolor: #38d39f;\n}\n.input-div > div > input{\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tpadding: 0.5rem 0.7rem;\n\tfont-size: 1.2rem;\n\tcolor: #555;\n\tfont-family: 'poppins', sans-serif;\n}\n.input-div.pass{\n\tmargin-bottom: 4px;\n}\na{\n\tdisplay: block;\n\ttext-align: right;\n\ttext-decoration: none;\n\tcolor: #999;\n\tfont-size: 0.9rem;\n\ttransition: .3s;\n}\n.banner {\n\twidth: 100%;\n    height: 89.7vh;\n\tbackground:url('wave.png');\n\tbackground-color: white;\n\tbackground-size: contain;\n    background-position: left;\n    margin-left: 0;\n    background-repeat: no-repeat;\n\tcolor:\t#414a4c;\n    overflow: hidden;\n}\n.bg{\n    background:url('bg.svg');\n\tbackground-color: white;\n\tbackground-size: contain;\n    background-repeat: no-repeat;\n}\n.avatar{\n    background:url('avatar.svg');\n\tbackground-size: 50%;\n\tbackground-repeat: no-repeat;\n\tmargin-top: 15%;\n\tmargin-left: 15%;\n}\na:hover{\n\tcolor: #38d39f;\n}\n.btn{\n\tdisplay: block;\n\twidth: 100%;\n\theight: 50px;\n\tborder-radius: 25px;\n\toutline: none;\n\tborder: none;\n\tbackground-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);\n\tbackground-size: 200%;\n\tfont-size: 1.2rem;\n\tcolor: #000;\n\tfont-family: 'Poppins', sans-serif;\n\ttext-transform: uppercase;\n\tmargin: 1rem 0;\n\tcursor: pointer;\n\ttransition: .5s;\n}\n.btn:hover{\n\tbackground-position: right;\n\tcolor:#fff;\n}\n@media screen and (max-width: 1050px){\n\t.container{\n\t\tgrid-gap: 5rem;\n\t}\n}\n@media screen and (max-width: 1000px){\n\tform{\n\t\twidth: 290px;\n\t}\n\n\t.login-content h2{\n        font-size: 2.4rem;\n        margin: 8px 0;\n\t}\n\n\t.img img{\n\t\twidth: 400px;\n\t}\n}\n@media screen and (max-width: 900px){\n\t.container{\n\t\tgrid-template-columns: 1fr;\n\t}\n\n\t.img{\n\t\tdisplay: none;\n\t}\n\n\t.wave{\n\t\tdisplay: none;\n\t}\n\n\t.login-content{\n\t\tjustify-content: center;\n\t}\n}\n.error {\n\tmargin: auto;\n    padding: 10px;\n    width: 300px;\n    color: white;\n    background-color: red;\n}\n.button {\n    display: flex;\n    justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsU0FBUztDQUNULHNCQUFzQjtBQUN2QjtBQUVBO0NBQ0MsZUFBZTtDQUNmLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsWUFBWTtDQUNaLFdBQVc7QUFDWjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFlBQVk7QUFDYjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGtCQUFrQjtJQUNmLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUVBO0NBQ0MsY0FBYztDQUNkLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7Q0FDckIsWUFBWTtBQUNiO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7Q0FDUiwyQkFBMkI7Q0FDM0IsV0FBVztDQUNYLGVBQWU7Q0FDZixlQUFlO0NBQ2YsbUNBQW1DO0NBQ25DLGdDQUFnQztDQUNoQywrQkFBK0I7Q0FDL0IsOEJBQThCO0FBQy9CO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixTQUFTO0NBQ1QsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLFNBQVM7QUFDVjtBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBRUE7Q0FDQyxTQUFTO0NBQ1QsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsT0FBTztDQUNQLE1BQU07Q0FDTixXQUFXO0NBQ1gsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGtDQUFrQztBQUNuQztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLFdBQVc7SUFDUixjQUFjO0NBQ2pCLDBCQUEwQztDQUMxQyx1QkFBdUI7Q0FDdkIsd0JBQXdCO0lBQ3JCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsNEJBQTRCO0NBQy9CLGNBQWM7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3QztDQUMzQyx1QkFBdUI7Q0FDdkIsd0JBQXdCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksNEJBQTRDO0NBQy9DLG9CQUFvQjtDQUNwQiw0QkFBNEI7Q0FDNUIsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7Q0FDWixzRUFBc0U7Q0FDdEUscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsa0NBQWtDO0NBQ2xDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFDQTtDQUNDLDBCQUEwQjtDQUMxQixVQUFVO0FBQ1g7QUFFQTtDQUNDO0VBQ0MsY0FBYztDQUNmO0FBQ0Q7QUFFQTtDQUNDO0VBQ0MsWUFBWTtDQUNiOztDQUVBO1FBQ08saUJBQWlCO1FBQ2pCLGFBQWE7Q0FDcEI7O0NBRUE7RUFDQyxZQUFZO0NBQ2I7QUFDRDtBQUVBO0NBQ0M7RUFDQywwQkFBMEI7Q0FDM0I7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyx1QkFBdUI7Q0FDeEI7QUFDRDtBQUNBO0NBQ0MsWUFBWTtJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcbn1cbip7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndhdmV7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHotaW5kZXg6IC0xO1xufVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWdhcCA6N3JlbTtcbiAgICBwYWRkaW5nOiAwIDByZW07XG59XG5cbi5pbWd7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jb250ZW50e1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZyBpbWd7XG5cdHdpZHRoOiA1MDBweDtcbn1cblxuZm9ybXtcblx0d2lkdGg6IDM2MHB4O1xufVxuXG4ubG9naW4tY29udGVudCBpbWd7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmxvZ2luLWNvbnRlbnQgaDJ7XG5cdG1hcmdpbjogMTVweCAwO1xuXHRjb2xvcjogIzMzMztcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC1zaXplOiAyLjFyZW07XG59XG5cbi5sb2dpbi1jb250ZW50IC5pbnB1dC1kaXZ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNyUgOTMlO1xuICAgIG1hcmdpbjogMjVweCAwO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDlkOWQ5O1xufVxuXG4ubG9naW4tY29udGVudCAuaW5wdXQtZGl2Lm9uZXtcblx0bWFyZ2luLXRvcDogMDtcbn1cblxuLml7XG5cdGNvbG9yOiAjZDlkOWQ5O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmkgaXtcblx0dHJhbnNpdGlvbjogLjNzO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcztcblx0LW1vei10cmFuc2l0aW9uOiAuM3M7XG5cdC1tcy10cmFuc2l0aW9uOiAuM3M7XG5cdC1vLXRyYW5zaXRpb246IC4zcztcbn1cblxuLmlucHV0LWRpdiA+IGRpdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogNDVweDtcbn1cblxuLmlucHV0LWRpdiA+IGRpdiA+IGg1e1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDEwcHg7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdGNvbG9yOiAjOTk5O1xuXHRmb250LXNpemU6IDE1cHg7XG5cdHRyYW5zaXRpb246IC4zcztcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pbnB1dC1kaXY6YmVmb3JlLCAuaW5wdXQtZGl2OmFmdGVye1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IC0ycHg7XG5cdHdpZHRoOiAwJTtcblx0aGVpZ2h0OiAycHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzOGQzOWY7XG5cdHRyYW5zaXRpb246IC40cztcbn1cblxuLmlucHV0LWRpdjpiZWZvcmV7XG5cdHJpZ2h0OiA1MCU7XG59XG5cbi5pbnB1dC1kaXY6YWZ0ZXJ7XG5cdGxlZnQ6IDUwJTtcbn1cblxuLmlucHV0LWRpdi5mb2N1czpiZWZvcmUsIC5pbnB1dC1kaXYuZm9jdXM6YWZ0ZXJ7XG5cdHdpZHRoOiA1MCU7XG59XG5cbi5pbnB1dC1kaXYuZm9jdXMgPiBkaXYgPiBoNXtcblx0dG9wOiAtNXB4O1xuXHRmb250LXNpemU6IDEycHg7XG59XG5cbi5pbnB1dC1kaXYuZm9jdXMgPiAuaSA+IGl7XG5cdGNvbG9yOiAjMzhkMzlmO1xufVxuXG4uaW5wdXQtZGl2ID4gZGl2ID4gaW5wdXR7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRib3JkZXI6IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRjb2xvcjogIzU1NTtcblx0Zm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmlucHV0LWRpdi5wYXNze1xuXHRtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbmF7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogIzk5OTtcblx0Zm9udC1zaXplOiAwLjlyZW07XG5cdHRyYW5zaXRpb246IC4zcztcbn1cbi5iYW5uZXIge1xuXHR3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg5Ljd2aDtcblx0YmFja2dyb3VuZDp1cmwoc3JjXFxhc3NldHNcXGltYWdlc1xcd2F2ZS5wbmcpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0Y29sb3I6XHQjNDE0YTRjO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmd7XG4gICAgYmFja2dyb3VuZDp1cmwoc3JjXFxhc3NldHNcXGltYWdlc1xcYmcuc3ZnKTtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmF2YXRhcntcbiAgICBiYWNrZ3JvdW5kOnVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFxhdmF0YXIuc3ZnKTtcblx0YmFja2dyb3VuZC1zaXplOiA1MCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdG1hcmdpbi10b3A6IDE1JTtcblx0bWFyZ2luLWxlZnQ6IDE1JTtcbn1cbmE6aG92ZXJ7XG5cdGNvbG9yOiAjMzhkMzlmO1xufVxuXG4uYnRue1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNTBweDtcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMmJlOGYsICMzOGQzOWYsICMzMmJlOGYpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRjb2xvcjogIzAwMDtcblx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bWFyZ2luOiAxcmVtIDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNpdGlvbjogLjVzO1xufVxuLmJ0bjpob3Zlcntcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG5cdGNvbG9yOiNmZmY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCl7XG5cdC5jb250YWluZXJ7XG5cdFx0Z3JpZC1nYXA6IDVyZW07XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcblx0Zm9ybXtcblx0XHR3aWR0aDogMjkwcHg7XG5cdH1cblxuXHQubG9naW4tY29udGVudCBoMntcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG5cdH1cblxuXHQuaW1nIGltZ3tcblx0XHR3aWR0aDogNDAwcHg7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xuXHQuY29udGFpbmVye1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHR9XG5cblx0LmltZ3tcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0LndhdmV7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC5sb2dpbi1jb250ZW50e1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG59XG4uZXJyb3Ige1xuXHRtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
        this.hasError = false;
    }
    ngOnInit() {
        const inputs = document.querySelectorAll(".input");
        function addcl() {
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
        }
        function remcl() {
            let parent = this.parentNode.parentNode;
            if (this.value == "") {
                parent.classList.remove("focus");
            }
        }
        inputs.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
        });
    }
    checkLogin() {
        if (this.username === '' || this.password === '') {
            this.hasError = true;
            this.message = "fill username and password fields";
            return;
        }
        else {
            this.hasError = true;
            this.message = null;
        }
        (this.loginservice.authenticate(this.username, this.password).subscribe(data => {
            this.router.navigate(['']);
            this.invalidLogin = false;
        }, error => {
            this.invalidLogin = true;
            console.log(error);
            if (error.status == 0) {
                this.hasError = true;
                this.message = "Internal Server Error. Try again later";
            }
            if (error.status == 401) {
                this.hasError = true;
                this.message = "Invalid Credentials";
            }
        }));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LogoutComponent = class LogoutComponent {
    constructor(authentocationService, router) {
        this.authentocationService = authentocationService;
        this.router = router;
    }
    ngOnInit() {
        this.authentocationService.logOut();
        this.router.navigate(['login']);
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/service/auth-gaurd.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-gaurd.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




let AuthGaurdService = class AuthGaurdService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    }
};
AuthGaurdService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGaurdService);



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: User, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class User {
    constructor(status) {
        this.status = status;
    }
}
let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // Provide username and password for authentication, and once authentication is successful, 
    //store JWT token in session
    authenticate(username, password) {
        let userlogin = {
            username: username,
            password: password
        };
        return this.httpClient
            .post("http://authservice-env.eba-3jtuenxh.us-west-2.elasticbeanstalk.com/api/auth/login", userlogin)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(userData => {
            sessionStorage.setItem("username", username);
            let tokenStr = userData.authToken;
            sessionStorage.setItem("token", tokenStr);
            return userData;
        }));
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem("username");
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem("username");
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/service/basic-auth-interceptor.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/basic-auth-interceptor.service.ts ***!
  \***********************************************************/
/*! exports provided: BasicAuthHtppInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthHtppInterceptorService", function() { return BasicAuthHtppInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasicAuthHtppInterceptorService = class BasicAuthHtppInterceptorService {
    constructor() { }
    intercept(req, next) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('token'),
                    Accept: 'application/json',
                }
            });
        }
        return next.handle(req);
    }
};
BasicAuthHtppInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BasicAuthHtppInterceptorService);



/***/ }),

/***/ "./src/app/service/httpclient.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/httpclient.service.ts ***!
  \***********************************************/
/*! exports provided: Employee, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class Employee {
    constructor(empId, name, designation, salary) {
        this.empId = empId;
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }
}
let HttpClientService = class HttpClientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getEmployees() {
        return this.httpClient.get("http://localhost:8080/employees");
    }
    deleteEmployee(employee) {
        return this.httpClient.delete("http://localhost:8080/employees" + "/" + employee.empId);
    }
    createEmployee(employee) {
        return this.httpClient.post("http://localhost:8080/employees", employee);
    }
};
HttpClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], HttpClientService);



/***/ }),

/***/ "./src/app/service/member.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/member.service.ts ***!
  \*******************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let MemberService = class MemberService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = "http://memberservice-env.eba-nepmk5vx.us-west-2.elasticbeanstalk.com";
        this.BASE_URL1 = "http://policyservice-env.eba-cue4qxcf.us-west-2.elasticbeanstalk.com";
    }
    submitMemberClaim(memberSubmitClaim) {
        return this.httpClient.post(this.BASE_URL + "/submitclaim", memberSubmitClaim).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            //You can perform some transformation here
            return data;
        }));
    }
    getClaimStatus(memberSubmitClaim) {
        return this.httpClient.get(this.BASE_URL + "/getClaimStatus/" + memberSubmitClaim.claimsId + "/" + memberSubmitClaim.policyId + "/" + memberSubmitClaim.memberId);
    }
    getBillDetails(billDetail) {
        return this.httpClient.get(this.BASE_URL + "/viewbill/" + billDetail.memberId + "/" + billDetail.policyId);
    }
    getProviderDetails(policyId) {
        return this.httpClient.get(this.BASE_URL1 + "/getChainOfProviders/" + policyId);
    }
};
MemberService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MemberService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CTS\mfpe-project\angular8-spring-boot-jwt-master-master\angular8-spring-boot-jwt-master-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map