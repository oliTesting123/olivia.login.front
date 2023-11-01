import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  errors: any[] = [];
  
  constructor(
    private readonly loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
  ){
    this.loginForm = this.fb.group({
      email: new FormControl({value: '', disabled: false}, Validators.email),
      password: ['',],
    });
  }

  ngOnInit(): void {
    
  }

  login(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authenticate(this.loginForm.value);
  }

  authenticate(data: any) {
    this.loginService.authenticate(data).subscribe(
      (response) => {
        const token = response.token;

        localStorage.setItem('token', token);
        
        let url = '/home';
        
        this.router.navigateByUrl(url);
      },
      (error) => {
        // Maneja errores de autenticación
        console.error('Error de autenticación', error);
      }
    );
  }
}
