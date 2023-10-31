import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/core/http';
import { UserModel } from 'src/app/core/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: UserModel[] = [];
  
  constructor(
    private usersService: UsersService,
    private router: Router,
    private readonly toaster: ToastrService,
    private readonly translate: TranslateService,
  ){}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.usersService.getData().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }

  editUser(user: any) {
    this.router.navigate(['/edit'], {state: {user: user}});
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(
      (response) => {
        this.toaster.remove(this.translate.instant('Usuario Eliminado'))
      },
      (error) => {
        this.toaster.error(this.translate.instant('Ha ocurrido un error'));
      }
    );
  }
}
