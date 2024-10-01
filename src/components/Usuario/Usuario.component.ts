import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { GitHubServiceService } from '../../services/gitHubService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    CommonModule,
    CabeceraComponent,
    FooterComponent
  ],
  templateUrl: './Usuario.component.html',
  styleUrl: './Usuario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioComponent implements OnInit{

  public user?: User;
  private gitService = inject(GitHubServiceService);
  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router)

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.gitService.searchUserById(id)) //tomar los params
      ).subscribe( user => {
        if (!user) return this.router.navigate(['/home'])
        this.user = user;
        return;
      })
  }

}
