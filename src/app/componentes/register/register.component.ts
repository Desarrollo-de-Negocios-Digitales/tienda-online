import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/user';
import { passwordMatchValidator } from '../../shared/password-match.directives';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

registerForma = this.fb.group({
  fullname:['',[Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
  email: ['',[Validators.required, Validators.email]],
  password: ['',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)]],
  confirmPassword: ['',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)]]
}, {
  validators: passwordMatchValidator
});

constructor(private fb:FormBuilder, 
  private auth: AuthService,
  private router: Router,
  private messageService: MessageService){

}
get fullname() {
  return this.registerForma.controls['fullname'];
 }

 get email() {
  return this.registerForma.controls['email'];
 }

 get password() {
  return this.registerForma.controls['password'];
 }

 get confirmPassword() {
  return this.registerForma.controls['confirmPassword'];
 }

 enviarRegistro(){
  const data = {...this.registerForma.value}

  delete data.confirmPassword;

  this.auth.registerUser(data as User).subscribe(
    response => {
      console.log(response)
       this.messageService.add({ severity: 'success', summary: 'Registro Exitoso', detail: 'Se ha agregado correctamente' });
       this.router.navigate(['login']);
    },
    error => console.log(error)
  )
 }

 
}
