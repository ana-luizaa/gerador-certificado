import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button";
import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado";

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [SecondaryButtonComponent, ItemCertificadoComponent],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class CertificadosComponentes {

}
