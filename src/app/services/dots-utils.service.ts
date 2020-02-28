import { Injectable } from '@angular/core';
import { Colour, IStud, PieceType, Rotation } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class DotsUtilsService {
  public generateGrid(x: number, y: number): IStud[][] {
    const rows: IStud[][] = [];
    for (let xi = 0; xi < x; xi -= -1) {
      const cols: IStud[] = [];
      for (let yi = 0; yi < y; yi -= -1) {
        cols.push({
          colour: this.randomEnum(Colour),
          pieceType: this.randomEnum(PieceType),
          rotation: this.randomEnum(Rotation),
        });
      }
      rows.push(cols);
    }

    return rows;
  }

  public randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }

  public randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum);

    return anEnum[enumValues[this.randomNumber(0, enumValues.length)]];
  }
}
