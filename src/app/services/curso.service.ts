import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {curso} from "../models/curso"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class CursoService {
  API_URI = "http://localhost:3000/api";
  constructor(private http: HttpClient) {}

  getCursos() {
    return this.http.get(`${this.API_URI}/cursos`);
  }

  getCurso(id: string) {
    return this.http.get(`${this.API_URI}/cursos/${id}`);
  }
  deleteCurso(id: string) {
    return this.http.delete(`${this.API_URI}/cursos/${id}`);
  }
  saveCurso(curso : curso){
    return this.http.post(`${this.API_URI}/cursos`,curso)
  }
  updateCurso(id: string|number, updatedCurso: curso): Observable<curso> {
    return this.http.put(`${this.API_URI}/curso/${id}`, updatedCurso);
  }
}
