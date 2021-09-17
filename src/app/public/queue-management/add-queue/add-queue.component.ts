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
      fifoEnables: new FormControl('')
    });
    this.filersFormGroup = new FormGroup({
      ruleName: new FormControl(''),
      ruleType: new FormControl (''),
      isRuleActive: new FormControl (''),
      itemType: new FormControl (''),
      rulesOperator: new FormControl (''),
      description: new FormControl (''),
      routerBasedOn: new FormControl (''),
      associateFilterType: new FormControl (''),
      defaultDestination: new FormControl (''),
      updateField: new FormControl (''),
      UpdateFieldType: new FormControl (''),
      basedOn: new FormControl (''),
      basedOnFieldType: new FormControl (''),
      to: new FormControl (''),
      value: new FormControl ('')
    });

    this.schedulerFormGroup = new FormGroup({
      mActive: new FormControl(''),
      mStartTime: new FormControl(''),
      mEndTime: new FormControl(''),
      tActive: new FormControl(''),
      tStartTime: new FormControl(''),
      tEndTime: new FormControl(''),
      wActive: new FormControl(''),
      wStartTime: new FormControl(''),
      wEndTime: new FormControl(''),
      thActive: new FormControl(''),
      thStartTime: new FormControl(''),
      thEndTime: new FormControl(''),
      fActive: new FormControl(''),
      fStartTime: new FormControl(''),
      fEndTime: new FormControl(''),
      sActive: new FormControl(''),
      sStartTime: new FormControl(''),
      sEndTime: new FormControl(''),
      suActive: new FormControl(''),
      suStartTime: new FormControl(''),
      suEndTime: new FormControl('')
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
    this.filersFormGroup.patchValue(res.addRules);
    //this.schedulerFormGroup.patchValue(res.schedulerInfo);
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
