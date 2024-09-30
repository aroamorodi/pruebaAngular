import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CabeceraComponent { }
