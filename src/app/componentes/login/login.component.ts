import { Component } from '@angular/core';
import { FormBuilder, PatternValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
 loginForma = this.fb.group({
   email: ['', [Validators.required, Validators.email]],
   password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]]
 });

 

 constructor(private fb: FormBuilder) {

 }

 get email() {
  return this.loginForma.controls['email'];
 }

 get password() {
  return this.loginForma.controls['password'];
 }
 
 
}
