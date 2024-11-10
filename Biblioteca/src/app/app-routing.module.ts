import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarLibroComponent } from './componentes/agregar-libro/agregar-libro.component';
import { ListaLibrosComponent } from './componentes/lista-libros/lista-libros.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscarLibroComponent } from './componentes/buscar-libro/buscar-libro.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agregar-libro', component: AgregarLibroComponent },
  { path: 'lista-libros', component: ListaLibrosComponent },
  { path: '', redirectTo: '/lista-libros', pathMatch: 'full' },
  { path: 'buscar-libro', component: BuscarLibroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
