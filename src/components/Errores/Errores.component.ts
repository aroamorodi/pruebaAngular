import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-errores',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './Errores.component.html',
  styleUrl: './Errores.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErroresComponent { }
