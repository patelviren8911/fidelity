import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-filter-rule-dialog',
  templateUrl: './filter-rule-dialog.component.html',
  styleUrls: ['./filter-rule-dialog.component.scss'],
})
export class FilterRuleDialogComponent implements OnInit {
  edit!: boolean;
  myFormGroup!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    if (this.data.hasOwnProperty('id')) {
      this.edit = true;
      this.myFormGroup = new FormGroup({
        abl: new FormControl(),
      });
    } else {
      this.edit = false;
      this.myFormGroup = new FormGroup({});
    }
  }
}
