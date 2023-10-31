import { Component, OnInit } from '@angular/core';
import { UsersService } from './core/http';
import { UserModel } from './core/models/index';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit(): void {
  }


}
