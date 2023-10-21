import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PreguntaPage implements OnInit {

  nombre = 'Anna'
  preguntaSecreta = '¿Cuál es tu animal favorito?'
  respuestaSecreta = 'gato'

  constructor(private router: Router, private alertController: AlertController, private authService: AuthService) { }

  ngOnInit() {
  }

  recuperarContrasena(){
    this.authService.verificacionRespuesta(this.respuestaSecreta);

  }

  volverAlInicio(){
    this.router.navigate(['/ingreso']);
  }

}
