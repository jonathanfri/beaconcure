import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from '../models/table.model';

const baseUrl = 'http://localhost:5000/api';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<[]> {
    return this.http.get<[]>(`${baseUrl}/files`);
  }

  getTables(fileName: any): Observable<Table[]> {
    return this.http.get<Table[]>(`${baseUrl}/files/${fileName}`);
  }

  getTable(fileName: any, tableTitle: any): Observable<Table> {
    return this.http.get<Table>(`${baseUrl}/files/${fileName}/tables/${tableTitle}`);
  }
}
