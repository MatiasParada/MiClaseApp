import { AuthService } from 'src/app/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule,AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { DataBaseService } from 'src/app/services/data-base.service';
import { showAlertDUOC, showToast } from 'src/app/tools/message-routines';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class MisdatosComponent  implements OnInit {


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: '¿Quieres actualizar tus datos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Aceptar',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.actualizarPerfil(); // Llama a tu función de actualización de perfil aquí
          },
        },
      ],
    });
  
    await alert.present();
  }

  usuario = new Usuario();
  repeticionPassword = '';

  constructor(private authService: AuthService, private bd: DataBaseService, private alertController: AlertController) { }

  async ngOnInit() {
    this.authService.usuarioAutenticado.subscribe((usuario) => {
      if (usuario !== null) {
        this.usuario = usuario!;
        this.repeticionPassword = usuario!.password;
      }
    })
  }

  mostrarMensaje(nombreCampo:string, valor: string) {
    if (valor.trim() === '') {
      showAlertDUOC(`Debe ingresar un valor para el campo "${nombreCampo}".`);
      return false;
    }
    return true;
  }

  actualizarPerfil() {
    if (!this.mostrarMensaje('nombre', this.usuario.nombre)) return;
    if (!this.mostrarMensaje('apellidos', this.usuario.apellido)) return;
    if (!this.mostrarMensaje('correo', this.usuario.correo)) return;
    if (!this.mostrarMensaje('pregunta secreta', this.usuario.preguntaSecreta)) return;
    if (!this.mostrarMensaje('respuesta secreta', this.usuario.respuestaSecreta)) return;
    if (!this.mostrarMensaje('contraseña', this.usuario.password)) return;
    if (this.usuario.password !== this.repeticionPassword) {
      showAlertDUOC(`Las contraseñas escritas deben ser iguales.`);
      return;
    }
    this.bd.guardarUsuario(this.usuario);
    this.authService.setUsuarioAutenticado(this.usuario);
    showToast('Sus datos fueron actualizados');
  }

}
