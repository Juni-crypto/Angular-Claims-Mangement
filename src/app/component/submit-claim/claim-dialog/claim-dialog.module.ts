import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimDialogComponent } from './claim-dialog.component';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [ClaimDialogComponent],
  entryComponents:[ClaimDialogComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class ClaimDialogModule { }
