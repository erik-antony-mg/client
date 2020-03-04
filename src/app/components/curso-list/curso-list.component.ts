import { Component, OnInit, HostBinding } from "@angular/core";
import { CursoService } from "../../services/curso.service";



@Component({
  selector: "app-curso-list",
  templateUrl: "./curso-list.component.html",
  styleUrls: ["./curso-list.component.css"]
})
export class CursoListComponent implements OnInit {
  @HostBinding("class") classes = "row";
  cursos: any = [];
  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.getCursos();
  }
  getCursos(){
    this.cursoService.getCursos().subscribe(
      res => {
        this.cursos = res;
      },
      err => console.error(err)
    );
  }
  deleteCurso(id:string){
    this.cursoService.deleteCurso(id).subscribe(
      res=> { console.log(res);
        this.getCursos();

      },err => console.log(err)
    )
    
  }
  
}
