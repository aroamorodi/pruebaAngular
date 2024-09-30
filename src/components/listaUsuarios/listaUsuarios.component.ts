import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GitHubServiceService } from '../../services/gitHubService.service';
// import { HttpClient } from '@angular/common/http';

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
export class ListaUsuariosComponent implements OnInit{
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
  users: any[] = [];
  query: string = '';

  private githubService = inject(GitHubServiceService);

  ngOnInit(): void {
    this.search()
    console.log(this.users)
  }



  search () {
    if (this.query) {
      this.githubService.searchUsers(this.query)
        .subscribe((data: any) => {
          this.users = data.items
          .sort((a: any, b: any) => a.login.localeCompare(b.login))
          .slice(0, 10);
        })
    }
  }
}
