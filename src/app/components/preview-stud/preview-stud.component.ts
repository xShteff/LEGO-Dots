import { Component } from '@angular/core';
import { StudInteractionService } from 'src/app/services';

@Component({
  selector: 'lego-preview-stud',
  styleUrls: ['./preview-stud.component.less'],
  templateUrl: './preview-stud.component.html',
})
export class PreviewStudComponent {
  public constructor(public studInteractionService: StudInteractionService) {}
}
