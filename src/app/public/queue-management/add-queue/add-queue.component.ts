import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';
import { MatDialog } from '@angular/material/dialog';
import { FilterRuleDialogComponent } from '../filter-rule-dialog/filter-rule-dialog.component';
@Component({
  selector: 'app-add-queue',
  templateUrl: './add-queue.component.html',
  styleUrls: ['./add-queue.component.scss'],
})
export class AddQueueComponent implements OnInit, AfterViewInit {
  step = 2;
  panelOpenState = false;
  qIFormGroup!: FormGroup;
  schedulerFormGroup!: FormGroup;
  filersFormGroup!: FormGroup;

  filterItems?: any[];
  constructor(public utilService: UtilService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.qIFormGroup = new FormGroup({});
    this.filersFormGroup = new FormGroup({
      filterRules: new FormControl(),
    });

    this.filterItems = [
      {
        id: 1,
        item: 'Rule 1',
        associateFilters: [
          { id: 1, item: 'Distribution Filter' },
          { id: 2, item: 'Associate filter' },
        ],
      },
      {
        id: 1,
        item: 'Rule 2',
        associateFilters: [
          { id: 1, item: 'Distribution Filter' },
          { id: 2, item: 'Associate filter' },
        ],
      },
      {
        id: 1,
        item: 'Rule 3',
        associateFilters: [
          { id: 1, item: 'Distribution Filter' },
          { id: 2, item: 'Associate filter' },
        ],
      },
    ];
  }

  ngAfterViewInit(): void {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  openDialog(formData: any) {
    const dialogRef = this.dialog.open(FilterRuleDialogComponent, {
      data: formData,
      minWidth: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
