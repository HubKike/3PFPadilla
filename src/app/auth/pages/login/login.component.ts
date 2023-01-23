import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void { }

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    console.log(usuario);
    console.log(password);

    if (usuario == 'jperez' && password == 'admin123') {
      //redirect al dashboard
    } else {
      //Mostrar mensaje de error
      this.error();
    }
  }

  error() {
    console.log('Error')
  }

}
