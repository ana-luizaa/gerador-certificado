import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button";
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificadoComponent {
  id: string = '6'

  constructor(private router: Router) { }

  redirecionaCertificado() {
    this.router.navigate(['/certificados', 2]); // /certificados/2
  }

}
