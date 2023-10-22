import { Component, OnInit } from '@angular/core';
 
import { Router, NavigationExtras } from '@angular/router';
 
import { Router, NavigationExtras,RouterModule } from '@angular/router';
 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
  standalone: true,
 
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IngresoPage implements OnInit {

  correo = 'atorres@duocuc.cl';
  password = '1234';
 
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class IngresoPage implements OnInit {

  correo = '';
  password = '';
 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    this.authService.login(this.correo, this.password);
  }

  contrasena(){
    this.router.navigate(['/correo']);
    
  }
}
