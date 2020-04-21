import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-board-dialog',
  template: `
    <h1 mat-dialog-title>Board</h1>
    <div mat-dialog-content>
      <p>What shall we call this board?</p>
      <mat-form-field>
        <!-- ngModel creates two way databinding between the component and the typescript -->
        <input placeholder="title" matInput [(ngModel)]="data.title"/>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Cancel</button>
        <!-- mat-dialog-close is the data that will be passed back to the parent component-->
        <button mat-button [mat-dialog-close]="data.title" cdkFocusInitial>Create</button>
    </div>
  `,
  styles: []
})
export class BoardDialogComponent {

  constructor(public dialogRef: MatDialogRef<BoardDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    // dialogRef is like a controller for the dialog itself
    this.dialogRef.close();
  }

}
