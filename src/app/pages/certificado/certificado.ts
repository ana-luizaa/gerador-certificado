import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class CertificadoComponent {

}
