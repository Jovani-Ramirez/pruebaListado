import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-generic-card',
  standalone: true,
  imports: [MatChipsModule, CommonModule, MatIconModule, MatDialogModule],
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
