import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private librosKey = 'libros';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Obtener todos los libros
  obtenerLibros(): any[] {
    if (isPlatformBrowser(this.platformId)) {
      const librosJson = localStorage.getItem(this.librosKey);
      return librosJson ? JSON.parse(librosJson) : [];
    }
    return [];
  }

  // Agregar un nuevo libro
  agregarLibro(libro: { id: number; titulo: string; autor: string; year: number }) {
    if (isPlatformBrowser(this.platformId)) {
      const libros = this.obtenerLibros();
      
      // Generar ID único para el nuevo libro
      libro.id = libros.length > 0 ? libros[libros.length - 1].id + 1 : 1;
      
      // Agregar el nuevo libro al array y actualizar LocalStorage
      libros.push(libro);
      localStorage.setItem(this.librosKey, JSON.stringify(libros));
    }
  }
}