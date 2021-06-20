import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-demo',
  templateUrl: './media-demo.component.html',
  styleUrls: ['./media-demo.component.scss'],
})
export class MediaDemoComponent implements OnInit {
  public thumbnail = 'assets/gd-logo.png';

  constructor() {}

  public ngOnInit(): void {}
}
