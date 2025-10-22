import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button';
import { SecondaryButtonComponent } from "./_components/secondary-button/secondary-button";
import { ItemCertificadoComponent } from "./_components/item-certificado/item-certificado";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent, ItemCertificadoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerador-certificado';
  exibirNavbar: boolean = true;
}

