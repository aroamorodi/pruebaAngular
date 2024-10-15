import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { GitHubServiceService } from '../../services/gitHubService.service';
import { User } from '../../interfaces/User';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { cantBePertierra, isValidField } from '../../validator/validators';
import { BusquedaUser } from '../../interfaces/BusquedaUser';

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
export class ListaUsuariosComponent implements OnInit{
  usuarios: User[] = [];

  form: FormGroup;
  private githubService = inject(GitHubServiceService);

  constructor (private fb: FormBuilder){
    this.form = this.fb.group({
      busqueda: ['', [Validators.required, Validators.minLength(4), cantBePertierra]]
    })
  }
  ngOnInit(): void {
    const savedUsers = localStorage.getItem('usuarios');

    if (savedUsers) {
      this.usuarios = JSON.parse(savedUsers)
    }
  }

  isValidField( field: string ) {
    return isValidField(this.form, field);
  }

  buscar (value: string) {
    this.githubService.searchUsersParam(value)
      .pipe(
        map(({ items }) => items.sort((a, b) => a.login.localeCompare(b.login))),
        catchError(error => of(error))
      )
      .subscribe((data) => {
        this.usuarios = data
        localStorage.setItem('usuarios', JSON.stringify(data))
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

  clear () {
    localStorage.clear();
    this.usuarios = [];
    this.form.get('busqueda')?.reset();
  }
}
