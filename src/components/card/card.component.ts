import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../interfaces/User';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDivider,
    MatIcon,
    RouterModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit { 

  @Input()
  public user!: User;


  ngOnInit(): void {
    if ( !this.user ) throw Error('User property is required');
  }
}
