import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-correcto',
  templateUrl: 'correcto.page.html',
  styleUrls: ['correcto.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class CorrectoPage implements OnInit {

  password :  string = '';
  constructor(private router: Router, private alertController: AlertController, private authService: AuthService) { }
  

  ngOnInit() {
    this.authService.contraseña$.subscribe(contraseña => {
      this.password = contraseña;
    });
  }

  login(){
    this.router.navigate(['/ingreso']);
  }
}
