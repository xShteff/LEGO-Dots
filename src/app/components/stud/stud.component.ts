import { Component, Input, OnInit } from '@angular/core';
import { Colour, IStud, PieceType } from 'src/app/model';

@Component({
  selector: 'lego-stud',
  styleUrls: ['./stud.component.less'],
  templateUrl: './stud.component.html',
})
export class StudComponent implements OnInit {
  @Input() public colour: Colour = Colour.Black;
  @Input() public pieceType: PieceType = PieceType.Empty;
  @Input() public stud: IStud;

  public ngOnInit(): void {
    console.log(this.stud);
    // PieceType.
  }
}
