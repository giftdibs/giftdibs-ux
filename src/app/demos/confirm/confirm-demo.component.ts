import {
  Component,
  OnInit
} from '@angular/core';

import {
  ConfirmAnswer,
  ConfirmService
} from 'projects/ux/src/public_api';

@Component({
  selector: 'app-confirm-demo',
  templateUrl: './confirm-demo.component.html',
  styleUrls: ['./confirm-demo.component.scss']
})
export class ConfirmDemoComponent implements OnInit {

  constructor(
    private confirmService: ConfirmService
  ) { }

  public ngOnInit(): void {
  }

  public openConfirm(): void {
    this.confirmService.confirm({
      message: 'Are you sure?'
    }, (answer: ConfirmAnswer) => {
      console.log('answer:', answer);
    });
  }

}
