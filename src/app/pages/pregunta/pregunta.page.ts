
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/model/usuario';
import { Storage } from '@ionic/storage-angular';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PreguntaPage implements OnInit {

  usuario = new Usuario();
  nombre = '';
  preguntaSecreta = '';
  respuestaSecreta = '';

  constructor(private router: Router,private storage: Storage, private alertController: AlertController, private authService: AuthService) { }

  ngOnInit() {
    // Suscríbete al BehaviorSubject para obtener el usuario cuando esté disponible
    this.authService.usuarioAutenticado.subscribe((usuario) => {
      if (usuario) {
        this.usuario = usuario;
        this.nombre = usuario.nombre; // Asigna el nombre del usuario
      }
    });
  }

  recuperarContrasena(){
    this.authService.verificacionRespuesta(this.respuestaSecreta);
  }

  volverAlInicio(){
    this.router.navigate(['/ingreso']);
  }

}
