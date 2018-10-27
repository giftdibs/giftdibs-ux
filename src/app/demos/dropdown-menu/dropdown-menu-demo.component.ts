import { Component, OnInit } from '@angular/core';
import { DropdownMenuItem } from 'projects/ux/src/public_api';

@Component({
  selector: 'app-dropdown-menu-demo',
  templateUrl: './dropdown-menu-demo.component.html',
  styleUrls: ['./dropdown-menu-demo.component.scss']
})
export class DropdownMenuDemoComponent implements OnInit {
  public menuItems: DropdownMenuItem[];

  constructor() { }

  public ngOnInit(): void {
    this.menuItems = [
      {
        label: 'First item',
        icon: 'users',
        action: () => {
          console.log('First item clicked!');
        },
        addSeparatorAfter: true,
        data: {
          foo: 'bar'
        }
      },
      {
        label: 'Second item',
        icon: 'trash',
        action: () => {
          console.log('Second item clicked!');
        },
        data: {
          bar: 'baz'
        }
      }
    ];
  }
}
