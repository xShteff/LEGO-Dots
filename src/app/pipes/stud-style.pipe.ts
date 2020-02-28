import { Pipe, PipeTransform } from '@angular/core';
import { Colour, PieceType } from 'src/app/model';

@Pipe({
  name: 'studStyle',
})
export class StudStylePipe implements PipeTransform {
  public transform(colour: Colour, pieceType: PieceType): string {
    if (pieceType !== 'empty') {
      return `background: ${colour}`;
    }

    return '';
  }
}
