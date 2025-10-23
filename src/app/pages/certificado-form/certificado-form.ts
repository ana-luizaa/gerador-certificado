import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button";

@Component({
  selector: 'app-certificado-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoFormComponent {

}
