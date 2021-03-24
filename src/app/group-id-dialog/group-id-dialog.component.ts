import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-group-id-dialog',
  templateUrl: './group-id-dialog.component.html',
  styleUrls: ['./group-id-dialog.component.css']
})
export class GroupIdDialogComponent {
  constructor(public dialogRef: MatDialogRef<GroupIdDialogComponent>) {}

  cancel(): void {
    close();
  }

  create(id): void {
    this.dialogRef.close(id);
  }
}
