import { Component, OnInit } from '@angular/core';
import { IStud } from 'src/app/model';
import { DotsUtilsService } from 'src/app/services';

@Component({
  selector: 'lego-dots',
  styleUrls: ['./dots.component.less'],
  templateUrl: './dots.component.html',
})
export class DotsComponent implements OnInit {
  public dotsGrid: IStud[][];

  public constructor(private readonly dotsUtilsService: DotsUtilsService) {
    this.dotsGrid = this.dotsUtilsService.generateGrid(10, 10);
    console.log(this.dotsGrid);
  }

  public ngOnInit(): void {}
}
