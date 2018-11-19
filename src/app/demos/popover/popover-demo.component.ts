import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import {
  PopoverMessage,
  PopoverMessageType
} from 'projects/ux/src/public_api';

@Component({
  selector: 'app-popover-demo',
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.scss']
})
export class PopoverDemoComponent implements OnInit {
  public extraContentVisible = false;
  public messageStream = new Subject<PopoverMessage>();

  constructor() { }

  public ngOnInit(): void { }

  public positionPopover(): void {
    this.messageStream.next({
      type: PopoverMessageType.Reposition
    });
  }
}
