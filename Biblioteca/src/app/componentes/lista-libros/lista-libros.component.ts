import { Component } from '@angular/core';
import { BibliotecaService } from '../../servicios/biblioteca.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent {
  libros: any[] = [];
  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this.libros = this.bibliotecaService.obtenerLibros();
  }
}
