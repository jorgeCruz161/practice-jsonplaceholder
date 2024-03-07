import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/usuarios';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit{

  public usuarios: Users[] = [];
  public isLoading: boolean = false;

  constructor( 
    private services: ApiService,
    private router: Router
   ){}
  
  ngOnInit(): void {
   this.loadUsers(); 
  }

  loadUsers(){
    this.isLoading = true;
    this.services.obtenerUsuarios().subscribe({
      next: data => {
        this.usuarios = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  goToDetailUser(id: Number){
    this.router.navigateByUrl("/detalle-usuario/"+id);
  }

}
