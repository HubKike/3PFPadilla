import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  postCourse(data: any) {
    return this.http.post<any>("http://localhost:3000/usersList/", data);
  }

  getCourses() {
    return this.http.get<any>("http://localhost:3000/usersList/");
  }

  putCourse(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/usersList/" + id, data);
  }

  deleteCourse(id: number) {
    return this.http.delete<any>("http://localhost:3000/usersList/" + id);
  }

}
