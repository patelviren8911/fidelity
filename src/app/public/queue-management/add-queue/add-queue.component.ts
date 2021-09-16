import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';
import { MatDialog } from '@angular/material/dialog';
import { ManageQueueService } from '../../../services/manage-queue.service';
import { FilterRuleDialogComponent } from '../filter-rule-dialog/filter-rule-dialog.component';
@Component({
  selector: 'app-add-queue',
  templateUrl: './add-queue.component.html',
  styleUrls: ['./add-queue.component.scss'],
})
export class AddQueueComponent implements OnInit, AfterViewInit {
  step = 2;
  myControl = new FormControl();
  panelOpenState = false;
  qIFormGroup!: FormGroup;
  schedulerFormGroup!: FormGroup;
  filersFormGroup!: FormGroup;
  isNewRule?:boolean;
  hiddenCriteria?:boolean;
  hiddenDistribution?:boolean;
  rules:any[]=['Item 1', 'Destination 2'];
  types:any[]=['Work Item History', 'Default destination', 'Load Balance', 'Plan Assignment', 'Previous Distribution'];
  filterItems?: any[];
  constructor(public utilService: UtilService, public dialog: MatDialog,
    private manageQueueService: ManageQueueService) {}

  ngOnInit(): void {

    
    this.isNewRule = true;
    this.hiddenCriteria = true;
    this.hiddenDistribution = true;
    this.qIFormGroup = new FormGroup({
      queueName : new FormControl (''),
      queueDescription : new FormControl(''),
      businessGroup: new FormControl(''),
      queueRecipients: new FormControl(''),
      active: new FormControl(''),
      fifoEnables: new FormControl(''),
    });
    this.filersFormGroup = new FormGroup({
      filterRules: new FormControl(),
      ruleName: new FormControl (''),
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
    this.loadData();
  }

  ngAfterViewInit(): void {}

loadData() {
  this.manageQueueService.getData().subscribe(res => {
    this.qIFormGroup.patchValue(res.queueInfo);
  })
}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  saveChanges() {
    console.log('test11---', this.schedulerFormGroup);
  }

  submitQueueForm() {
    console.log('test---', this.qIFormGroup.value);
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

  onChangeType(value:any) {
    this.hiddenCriteria = true;
    this.hiddenDistribution = true;
    if (value === 'Work Item History') {
      this.hiddenCriteria = false;
    } else if (value === 'Default destination') {
      this.hiddenDistribution = false;
    }
  }
}
