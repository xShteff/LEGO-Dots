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

  public constructor(
    private readonly dotsUtils: DotsUtilsService,
    private readonly studInteractionService: StudInteractionService
  ) {}

  public interact(stud: IStud) {
    stud.colour = this.studInteractionService.colour;
    stud.pieceType = this.studInteractionService.piece;
  }
}
