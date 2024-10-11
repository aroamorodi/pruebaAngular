import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { cantBePertierra } from '../../validator/validators';
import { GitHubServiceService } from '../../services/gitHubService.service';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css',
})
export class CabeceraComponent {

  form: FormGroup;
  private githubService = inject(GitHubServiceService); 
  constructor (private fb: FormBuilder){
    this.form = this.fb.group({
      busqueda: ['', [Validators.required, Validators.minLength(4), cantBePertierra]]
    })
  }

}
