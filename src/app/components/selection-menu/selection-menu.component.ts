import { Component, OnInit } from '@angular/core';
import { Colour } from 'src/app/model';
import { StudInteractionService } from 'src/app/services';

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

  public constructor(private readonly studInteractionService: StudInteractionService) {}

  public ngOnInit(): void {
    console.log(this.colours);
  }

  public setColour(colourKey) {
    this.studInteractionService.colour = Colour[colourKey];
  }
}
