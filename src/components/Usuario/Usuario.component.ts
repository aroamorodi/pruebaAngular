import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { GitHubServiceService } from '../../services/gitHubService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../../interfaces/User';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './Usuario.component.html',
  styleUrl: './Usuario.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioComponent implements OnInit {
  user: User | null = null;
  private gitService = inject(GitHubServiceService);
  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router)

  ngOnInit(): void {
    setTimeout(() => {
      this.activateRoute.params
        .pipe(
          switchMap(({ id }) => this.gitService.searchUserById(id)) //tomar los params
        ).subscribe((user?: User) => {
          debugger
          if (!user) return this.router.navigate(['/home']);

          this.user = user;
          console.log(this.user)
          return
        })
    }, 4000)

  }
}
