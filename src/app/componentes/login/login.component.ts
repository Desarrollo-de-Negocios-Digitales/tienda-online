import { Component } from '@angular/core';
import { FormBuilder, PatternValidator, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SafeCall } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
 loginForma = this.fb.group({
   email: ['', [Validators.required, Validators.email]],
   password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)]]
 });

 

 constructor(private fb: FormBuilder, private authService: AuthService,
  private messageService: MessageService,
  private router: Router) {

 }

 get email() {
  return this.loginForma.controls['email'];
 }

 get password() {
  return this.loginForma.controls['password'];
 }

 login() {
   const {email, password} = this.loginForma.value;
   this.authService.getUserByEmail(email as string).subscribe(
    response =>{
     if(response.length > 0 && response[0].password === password){
      sessionStorage.setItem("email", email as string)
      this.router.navigate(['home']);
     }else{
      this.messageService.add({ severity: 'error', summary: 'Error Cuenta Usuario', detail: 'Email o Contraseña Incorrecta' });
     }
    },
    error =>{
      this.messageService.add({ severity: 'error', summary: 'Error de validación', detail: 'Email o Contraseña Incorrecta' });
    }
    
   );
 }
 
 
}
