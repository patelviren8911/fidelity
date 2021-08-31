import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public utilService: UtilService) { }

  ngOnInit(): void {
  }

}
