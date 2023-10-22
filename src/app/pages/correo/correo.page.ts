import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CorreoPage implements OnInit {

 

 
  correo = '';
 

  constructor(private router: Router, private alertController: AlertController, private authService: AuthService) { }

  ngOnInit() {
  }

 

 
  async recuperarContrasena() {
    const correoValido = await this.authService.verificacionCorreo(this.correo);

    if (correoValido) {
        this.router.navigate(['/pregunta']);
    }
  }


 
  volverAlInicio() {
    this.router.navigate(['/ingreso']);
  }

}

