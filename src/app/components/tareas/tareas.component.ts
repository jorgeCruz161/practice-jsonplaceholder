import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/interfaces/tareas';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  public tareas: Todos[] = []
  public isLoading: boolean = false;
  page = 1;
  pageSize = 10;

  constructor(
    private service: ApiService,
  ){}

  ngOnInit(): void {
    this.loadTareas();
  }

  loadTareas(){
    this.isLoading = true;
    this.service.obtenerTareas().subscribe({
      next: data => {
          this.tareas = data;
          this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    })
  }
}
