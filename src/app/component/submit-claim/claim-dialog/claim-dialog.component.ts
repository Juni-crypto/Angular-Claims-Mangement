import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-dialog',
  templateUrl: './claim-dialog.component.html',
  styleUrls: ['./claim-dialog.component.css']
})
export class ClaimDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ClaimDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public router:Router) { }

  onOkClick(): void {
    this.dialogRef.close();
    this.router.navigate(["/memberHome"]);
  }

}