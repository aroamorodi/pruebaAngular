import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css',
})
export class CabeceraComponent {

  form: FormGroup;

  constructor (private fb: FormBuilder){
    this.form = this.fb.group({
      busqueda: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

}
