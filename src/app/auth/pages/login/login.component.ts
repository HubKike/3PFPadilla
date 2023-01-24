import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('someaccount@domain.com',[Validators.required, Validators.email]),
      password: new FormControl('admin123',[Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    })
  }

  ingresar() {
    const {email, password} = this.form.value;

    if (email=='someaccount@domain.com'&& password=='admin123') {
      this.router.navigate(['/cursos']);
    } else {
      this.router.navigate(['/404']);
    }
  }

}
