import { Component, Input } from '@angular/core';
import { IStud } from 'src/app/model';
import { DotsUtilsService, StudInteractionService } from 'src/app/services';

@Component({
  selector: 'lego-stud',
  styleUrls: ['./stud.component.less'],
  templateUrl: './stud.component.html',
})
export class StudComponent {
  @Input() public stud: IStud;
  @Input() public inputMode = false;
  @Input() public interactable = true;

  public constructor(
    private readonly dotsUtils: DotsUtilsService,
    private readonly studInteractionService: StudInteractionService
  ) {}

  public interact(stud: IStud) {
    if (!this.interactable) {
      return;
    }
    if (!this.inputMode) {
      stud.colour = this.studInteractionService.colour;
      stud.pieceType = this.studInteractionService.piece;
      // stud.rotation = this.studInteractionService.rotation;
    } else {
      this.studInteractionService.piece = stud.pieceType;
    }
  }
}
