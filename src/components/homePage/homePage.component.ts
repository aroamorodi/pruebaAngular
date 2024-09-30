import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ListaUsuariosComponent } from '../listaUsuarios/listaUsuarios.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    CabeceraComponent,
    FooterComponent,
    ListaUsuariosComponent,
    HttpClientModule
  ],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
