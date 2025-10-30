import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoFormComponent {


  atividade: string = '';

  certificado: Certificado = {
    atividades: [],
    nome: ''
  };

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1)
  }

  // passando as informações da lista para o certificado
  submit() {
    if (!this.formValido()) {
      return;
    }
    console.log(this.certificado);
  }
}
