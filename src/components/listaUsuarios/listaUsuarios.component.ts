import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { GitHubServiceService } from '../../services/gitHubService.service';
import { User } from '../../interfaces/User';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { cantBePertierra } from '../../validator/validators';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent
  ],
  templateUrl: './listaUsuarios.component.html',
  styleUrl: './listaUsuarios.component.css',
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: User[] = [];

  form: FormGroup;
  private githubService = inject(GitHubServiceService);

  constructor (private fb: FormBuilder){
    this.form = this.fb.group({
      busqueda: ['', [Validators.required, Validators.minLength(4), cantBePertierra]]
    })
  }
  ngOnInit(): void {
  }

  /* ngAfterViewInit() {
    this.githubService.searchUsers()
      .pipe(
        map((data: User[]) => data.sort((a, b) => a.login.localeCompare(b.login))),
        catchError(error => of(error))
      )
      .subscribe((data: User[]) => {
        this.usuarios = data
      })
  } */

  buscar (value: string) {
    console.log('Entra aquii')
    this.githubService.searchUsersParam(value)
      .pipe(
        map((data: User[]) => data.sort((a, b) => a.login.localeCompare(b.login))),
        catchError(error => of(error))
      )
      .subscribe((data: User[]) => {
        console.log('USUARIOS ', data)
        this.usuarios = data
      })
  }
  onSubmit () {
    if (this.form.valid) {
      const valorBusqueda = this.form.get('busqueda')?.value;
      this.buscar(valorBusqueda);
    } else {
      console.log('Formulario inválido');
    }
  }
}
