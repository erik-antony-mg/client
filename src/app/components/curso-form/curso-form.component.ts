import { Component, OnInit, HostBinding } from '@angular/core';
import {curso} from "src/app/models/curso";
import{CursoService} from "../../services/curso.service";
import{Router,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  @HostBinding("class") classes = "row";
  curso: curso ={
    id:0,
    nombre:'',
    description: '',
    image: " ",
    create_at:new Date()

  };
  edit:boolean =false;

  constructor( private CursoService : CursoService , private router :Router, private activateRoute:ActivatedRoute ) { }

  ngOnInit(): void {
   const params = this.activateRoute.snapshot.params;
   if(params.id){
     this.CursoService.getCurso(params.id)
     .subscribe(
       res =>{
          console.log(res);
          this.curso=res;
          this.edit=true;
       },
       err=> console.error(err)
     )
   }
  }

  saveCurso(){
    delete this.curso.id;
    delete this.curso.create_at;
    this.CursoService.saveCurso(this.curso)
    .subscribe(
      res=>{
        console.log(res) ;
          this.router.navigate(["/cursos"]);
        
      },
      err=> console.error(err)
    )
  }

  updateCurso(){
    delete this.curso.create_at;
    this.CursoService.updateCurso(this.curso.id,this.curso)
    .subscribe(
      res =>{
          console.log(res)
      },
      err=> console.error(err)
    )
  }

}
