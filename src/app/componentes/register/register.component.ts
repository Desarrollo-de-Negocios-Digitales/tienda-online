import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

registerForma = this.fb.group({
  "name":['',[Validators.required]]
});

constructor(private fb:FormBuilder){

}

}
