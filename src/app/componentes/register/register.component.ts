import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

registerForma = this.fb.group({
  fullname:['',[Validators.required, Validators.pattern(/^([A-Z][a-z]+)(\s[A-Z][a-z]+)?\s([A-Z][a-z]+)\s([A-Z][a-z]+)$/)]],
  email: ['',[Validators.required, Validators.email]],
  password: ['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)]],
  confirmPassword: ['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)]]
});

constructor(private fb:FormBuilder){

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
}
