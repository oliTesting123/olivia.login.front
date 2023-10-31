import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/core/http';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any;
  query = {
    name: '',
    last_name: '',
    email: '',
  };

  constructor(
    private router: Router,
    private usersService: UsersService,
    private readonly toaster: ToastrService,
    private readonly translate: TranslateService,
    ){
    this.user = this.router.getCurrentNavigation().extras.state.user;
    }

  ngOnInit(): void {
    if (this.user) {
      this.query.name = this.user.name;
      this.query.last_name = this.user.last_name;
      this.query.email = this.user.email;
    }
  }

  save() {
    // Realizar la solicitud POST con los datos del formulario
    this.usersService.putUser(this.query).subscribe(
      (response) => {

        this.toaster.success(this.translate.instant('Datos guardados!'));
        // Puedes realizar otras acciones aquí después de la solicitud exitosa.
      },
      (error) => {
        this.toaster.error(this.translate.instant('Ha ocurrido un error!'));
        // Manejo de errores
      }
    );
  }

}
