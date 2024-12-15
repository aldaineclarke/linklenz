import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import QrCode from 'qrcode';
@Component({
  selector: 'app-text-input',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  qrcodeForm = new FormGroup({
    text: new FormControl("")
  });
  qrImage:string = ""


  async onSubmit(event:Event){
    let url = await QrCode.toDataURL(this.qrcodeForm.controls.text.value!,{color:{
      dark:"#010599FF",
      light:"#FFBF60FF"
    }} );
    console.log(url);
    this.qrImage = url;
    event.preventDefault();
  }
}
