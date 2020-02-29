import { Pipe, PipeTransform } from '@angular/core';
import { Colour, PieceType, Rotation } from 'src/app/model';

@Pipe({
  name: 'studStyle',
})
export class StudStylePipe implements PipeTransform {
  public transform(colour: Colour, pieceType?: PieceType, rotation?: Rotation): string {
    if (pieceType !== 'empty') {
      return `transform: rotate(${rotation}deg);background: ${colour}`;
    }

    return '';
  }
}
