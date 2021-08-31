import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  appitems = [
    {
      label: 'Home',
      link: '/',
      faIcon: 'fa-home'
    },
    {
      label: 'Admin',
      link: '/admin-management',
      faIcon: 'fa-user-cog'
    },
    {
      label: 'Maintenance',
      faIcon: 'fa-tasks',
      items: [
        {
          label: 'Queue',
          faIcon: 'fa-clone',
          items: [
            {
              label: 'Add Queue',
              link: '/queue-management/add-queue',
              faIcon: 'fa-plus' // Font awesome default prefix is fas
            },
            {
              label: 'View Queue',
              link: '/queue-management/view-queue',
              faIcon: 'fa-eye' // Font awesome default prefix is fas
            }
          ]
        }
      ]
    },
    {
      label: 'Reports',
      link: '/report-manager',
      faIcon: 'fas fa-file-signature'
    }
  ];

  config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: 'rgb(208, 241, 239)',
    fontColor: 'rgb(8, 54, 71)',
    backgroundColor: 'rgb(208, 241, 239)',
    selectedListFontColor: 'red',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
