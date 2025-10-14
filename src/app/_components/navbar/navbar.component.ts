import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit{
    ngOnInit(): void {
    // console.log('Meu componente navbar inicializou');
    this.mensagem();
   }
   
   mensagem(){
    console.log('Meu componente navbar inicializou (em uma nova função)')
   }
}
