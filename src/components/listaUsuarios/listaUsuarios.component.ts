import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GitHubServiceService } from '../../services/gitHubService.service';
import { User } from '../../interfaces/User';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './listaUsuarios.component.html',
  styleUrl: './listaUsuarios.component.css',
})
export class ListaUsuariosComponent implements OnInit, AfterViewInit {
  usuarios: User[] = [];

  private githubService = inject(GitHubServiceService);

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.githubService.searchUsers()
      .pipe(
        map((data: User[]) => data.sort((a, b) => a.login.localeCompare(b.login))),
        catchError(error => of(error))
      )
      .subscribe((data: User[]) => {
        console.log('USUARIOS ', data)
        this.usuarios = data
      })
  }
}
