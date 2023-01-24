import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionacionService } from '../../services/autenticacion.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private router: Router, private auth: AutenticacionacionService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('Ryleigh65@gmail.com',[Validators.required, Validators.email]),
      password: new FormControl('fscOGonQEWJ4jZX',[Validators.required, Validators.minLength(6)])
    })
  }

  ingresar() {
    const {email, password} = this.form.value;

    this.auth.login(email, password).subscribe((data: Usuario[]) => {
      if(data.length ===1)
      {
        console.log('Usuario logueado', data);
        this.auth.establecerSesion(true, data[0]);
      }else{
        console.log('Error de autenticación')
      }
    })

    if (email=='someaccount@domain.com'&& password=='admin123') {
      this.router.navigate(['/cursos']);
    } else {
      this.router.navigate(['/404']);
    }
  }

}
