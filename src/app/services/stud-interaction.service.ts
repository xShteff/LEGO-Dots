import { Injectable } from '@angular/core';
import { Colour, Interaction, PieceType, Rotation } from '../model';

@Injectable({
  providedIn: 'root',
})
export class StudInteractionService {
  public mode: Interaction = Interaction.Colour;
  public colour: Colour = Colour.Lavender;
  public piece: PieceType = PieceType.PizzaSlice;
  public rotation: Rotation = Rotation.None;
}
