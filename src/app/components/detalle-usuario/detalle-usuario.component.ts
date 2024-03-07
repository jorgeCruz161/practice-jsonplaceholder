import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Users } from 'src/app/interfaces/usuarios';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent {

  public usuario?: Users;
  public isLoading: boolean = false;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute
  ){
    this.loadDetailUser();
  }

  loadDetailUser(){
    this.isLoading = true;
    this.route.params.subscribe(({id}: Params) => {
      this.service.obtenerUsuario( id ).subscribe({
        next: data => {
          this.usuario = data;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
    });  
  }

}
