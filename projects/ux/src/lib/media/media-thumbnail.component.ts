import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Optional
} from '@angular/core';

import {
  MediaComponent
} from './media.component';

import {
  MediaSize
} from './media-size';

@Component({
  selector: 'gd-media-thumbnail',
  templateUrl: './media-thumbnail.component.html',
  styleUrls: ['./media-thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaThumbnailComponent implements OnInit {
  public size: MediaSize;

  constructor(
    @Optional() private wrapper: MediaComponent
  ) { }

  public ngOnInit(): void {
    if (this.wrapper) {
      this.size = this.wrapper.size;
    }
  }
}
