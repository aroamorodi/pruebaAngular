import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GitHubServiceService } from '../../services/gitHubService.service';
import { User } from '../../interfaces/User';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
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
export class ListaUsuariosComponent implements OnInit {
  usuarios: User[] = [];

  private githubService = inject(GitHubServiceService);

  ngOnInit(): void {
    // this.search()

    this.githubService.searchUsers()
      .pipe(
        map((data: User[]) => {
          // Ordenar los usuarios por el campo 'login'
          return data.sort((a, b) => a.login.localeCompare(b.login));
        }),
        catchError(error => {
          console.error('Error al obtener usuarios', error);
          return of([]); // Devuelve un arreglo vacío en caso de error
        })
      )
      .subscribe((data: User[]) => {
        console.log('USUARIOS ', data)
        this.usuarios = data
      })
  }

  /* search () {
    // if (this.query) {
      this.githubService.searchUsers()
        .subscribe((data: any) => {
          console.log('USUARIOS ', data)
          this.users = data
        })
  } */

  onCardClick () {
    console.log('Estoy apretando el boton')
  }
}
