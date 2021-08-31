import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UtilService } from 'src/app/services/util.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-add-queue',
  templateUrl: './add-queue.component.html',
  styleUrls: ['./add-queue.component.scss']
})
export class AddQueueComponent implements OnInit, AfterViewInit {
  step = 1;
  qIFormGroup!: FormGroup;
  schedulerFormGroup!: FormGroup;
  filersFormGroup!: FormGroup;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public utilService: UtilService) { }

  ngOnInit(): void {
    this.qIFormGroup = new FormGroup({});
    this.filersFormGroup = new FormGroup({
      filterRules: new FormControl()
    });


  }



  ngAfterViewInit(): void {

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

}

