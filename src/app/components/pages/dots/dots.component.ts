import { Component, OnInit } from '@angular/core';
import { IStud } from 'src/app/model';
import { DotsUtilsService, StudInteractionService } from 'src/app/services';

@Component({
  selector: 'lego-dots',
  styleUrls: ['./dots.component.less'],
  templateUrl: './dots.component.html',
})
export class DotsComponent implements OnInit {
  public dotsGrid: IStud[][];

  public preview: IStud = {
    colour: this.studInteractionService.colour,
  };

  public constructor(
    private readonly dotsUtilsService: DotsUtilsService,
    private readonly studInteractionService: StudInteractionService
  ) {
    this.randomise();
  }

  public ngOnInit(): void {}

  public randomise() {
    this.dotsGrid = this.dotsUtilsService.generateGrid(8, 8);
  }
}
