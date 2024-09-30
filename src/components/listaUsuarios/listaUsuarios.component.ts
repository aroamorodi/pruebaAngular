import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './listaUsuarios.component.html',
  styleUrl: './listaUsuarios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaUsuariosComponent {
  usuarios = [
    {
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    },
    {
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    },
    {
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    },{
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    },
    {
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    },
    {
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    },
    {
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    },
    {
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    },
    {
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    },
    {
      nombre: 'Aroa',
      apellido: 'Moro',
      telefono: '089898'
    }
  ]
}
