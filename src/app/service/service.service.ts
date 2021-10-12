import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  addStudent(student: Object): Observable<any> {
    return this.http.post('http://localhost:8095/student/add', student);
  }
  addTeacher(teacher: Object): Observable<any> {
    return this.http.post('http://localhost:8095/teacher/add', teacher);
  }}
