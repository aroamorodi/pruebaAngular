import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    CommonModule,
    CabeceraComponent,
    FooterComponent
  ],
  templateUrl: './Usuario.component.html',
  styleUrl: './Usuario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioComponent { }
