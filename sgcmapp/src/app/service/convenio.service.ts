import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Convenio } from '../model/convenio';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService implements ICrudService<Convenio> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/convenio';

  get(termoBusca?: string): Observable<Convenio[]> {
    let url = this.apiUrl + '/consultar';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Convenio[]>(url);
  }

  getById(id: number): Observable<Convenio> {
    throw new Error('Method not implemented.');
  }

  save(objeto: Convenio): Observable<Convenio> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

}
