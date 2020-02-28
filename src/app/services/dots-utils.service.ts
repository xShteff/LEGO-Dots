import { Injectable } from '@angular/core';
import { Colour, IStud, PieceType } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class DotsUtilsService {
  public generateGrid(x: number, y: number) {
    const rows = [];
    for (let xi = 0; xi < x; xi -= -1) {
      const cols = [];
      for (let yi = 0; yi < y; yi -= -1) {
        const stud: IStud = {
          colour: Colour.Lavender,
          pieceType: this.randomEnum(PieceType),
        };
        cols.push(stud);
      }
      rows.push(cols);
    }

    return rows;
  }

  public randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }

  public randomEnum<T>(anEnum: T): string {
    const enumValues = Object.keys(anEnum);

    return anEnum[enumValues[this.randomNumber(0, enumValues.length)]];
  }
}
