import {
  ChangeDetectionStrategy,
  Component
  // ChangeDetectorRef
} from '@angular/core';

let nextId = 0;

@Component({
  selector: 'gd-disclosure',
  templateUrl: './disclosure.component.html',
  styleUrls: ['./disclosure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisclosureComponent {
  public isOpen = false;
  public disclosureId = `gd-disclosure-${nextId++}`;

  constructor(
    // private changeDetector: ChangeDetectorRef
  ) { }

  public toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
