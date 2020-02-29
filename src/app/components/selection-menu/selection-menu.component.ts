import { Component, OnInit } from '@angular/core';
import { Colour, Rotation } from 'src/app/model';
import { StudInteractionService } from 'src/app/services';
import { PieceType } from './../../model/piece-type';
import { IStud } from './../../model/stud';

@Component({
  selector: 'lego-selection-menu',
  styleUrls: ['./selection-menu.component.less'],
  templateUrl: './selection-menu.component.html',
})
export class SelectionMenuComponent implements OnInit {
  public colours = Object.keys(Colour).map((r) => {
    return {
      colour: Colour[r],
      name: r,
    };
  });

  public shapeStuds = Object.keys(PieceType).map((r) => {
    const stud: IStud = {
      colour: this.studInteractionService.colour,
      pieceType: PieceType[r],
      rotation: Rotation.None,
    };

    return stud;
  });

  public constructor(private readonly studInteractionService: StudInteractionService) {}

  public ngOnInit(): void {
    console.log(this.shapeStuds);
  }

  public setColour(colourKey) {
    this.studInteractionService.colour = Colour[colourKey];
  }
}
