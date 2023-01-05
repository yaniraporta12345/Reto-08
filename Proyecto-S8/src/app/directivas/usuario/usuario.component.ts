import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuario= 'Angular';
  password = '12345';
  resultado = false;
  mensaje = '';
  links = ['Home', 'Support', 'Contact'];


  ValidarUsuario(user:string, pass:string){
    if(user == this.usuario && pass == this.password){
      this.resultado = true;
      this.mensaje="";
    }else{
      this.resultado = false;
      this.mensaje="Credenciales incorrectas, inténtelo nuevamente.";
    }
  }
}
