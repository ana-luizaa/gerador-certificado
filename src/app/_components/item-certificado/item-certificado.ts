import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificadoComponent {
  id: string = '6'
}
