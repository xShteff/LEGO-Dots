import { Component, Input } from '@angular/core';
import { IStud } from 'src/app/model';

@Component({
  selector: 'lego-stud',
  styleUrls: ['./stud.component.less'],
  templateUrl: './stud.component.html',
})
export class StudComponent {
  @Input() public stud: IStud;
}
