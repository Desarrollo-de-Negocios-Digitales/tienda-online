import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

const modPrimeNg: any = [
  ButtonModule,
  CardModule,
  InputTextModule,
  KeyFilterModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeNg
  ], exports: [
    modPrimeNg
  ]
})
export class PrimengModule { }
