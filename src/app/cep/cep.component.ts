import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {API} from '../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  private mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
  retCep: string = ""
  cepForm: FormGroup
  constructor(private http: Http, private fb: FormBuilder) { }

  ngOnInit() {
   this.cepForm = this.fb.group({
     cep: ['',[Validators.required]]
   })

  }
  

  CEP(cep){
    cep = cep.replace(/\D/g,'');
    console.log(cep)
    if(cep != ""){
      let validacep=/[0-9]{8}$/;
      if(validacep.test(cep)){
       return this.http.get(`${API}/${cep}/json`)
        .map((res) => res.json())
        .subscribe(res => console.log(res))
      }
    }
  }

}
