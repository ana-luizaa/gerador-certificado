import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoFormComponent {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = [];
  
  campoInvalido(control: NgModel){
    return control.invalid && control.touched
  }

  formValido(){
    return this.atividades.length > 0 && this.nome.length > 0;
  }

  adicionarAtividade(){
    this.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number){
    this.atividades.splice(index, 1)
  }
}
