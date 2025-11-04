import { Component, OnInit } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button";
import { Router, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.services';

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class CertificadoComponent implements OnInit{
  constructor(private certificadoService: CertificadoService){ }

  ngOnInit(): void {
    console.log(this.certificadoService.certificados);
  }
}
