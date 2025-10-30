import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button";
import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [ItemCertificadoComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class CertificadosComponent {

}
